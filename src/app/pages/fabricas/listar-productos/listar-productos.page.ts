import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FabricasService,productos } from 'src/app/servicios/fabricas.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage implements OnInit {
  productos :productos = {}
  id: any
  nombre: any
  linea = {
    estado: "",
    id_linea: "",
    nombre: "",
    nombre_linea: "",
    id: ""
  }
  id_ruta: string
  lista_productos:any

  constructor(private activatedRoute: ActivatedRoute,
    private route: Router,
    private service: FabricasService,
    private actionSheetController: ActionSheetController,
    private uiService: UiService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')    
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre')
    this.service.recupera_animal_linea(this.id).subscribe(res => {
      this.linea = res[0]
      this.id_ruta = this.linea.id
      //console.log(this.id_ruta);
      this.service.recuperaproductos(this.id_ruta).subscribe(res1 => {
        this.lista_productos = res1
        //console.log(this.lista_productos);
       // console.log(this.id_ruta);
        
      })
    })
  }

  ir() {
    this.route.navigate(['/tabs/fabricas/agregar-producto', this.id, this.nombre])
  }

  listar_detalles(producto){
    this.route.navigate(['/tabs/fabricas/listar-detalles',this.id_ruta,producto.id,producto.tipo])
  }

  async crud(item) {
    this.service.recupera_id_animal_linea(item.id).subscribe(res => {
      this.productos = res[0]
      item.id_ruta = this.linea.id
      console.log(item.id_ruta);
      
    })
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Ver',
          icon: 'eye',
          handler: () => {
            this.navCtrl.navigateForward(['tabs/fabricas/ver-producto',item])
          }
        },
        {
          text: 'Modificar',
          icon: 'create',
          handler: () => {
            this.navCtrl.navigateForward(['tabs/fabricas/modificar-producto',item])
          }
        }, 
        {
          text: item.estado?'Deshabilitar':'Habilitar',
          role: 'destructive',
          icon: item.estado?'trash':'power',
         handler: () => {
           console.log('Delete clicked');
           this.uiService.presentLoading("Procesando...")
           .then(load=>{
            this.service.modificarProducto(item.id,item.id_ruta,{ estado: !item.estado })
             .then(()=>{
               load.dismiss()
             })
             .catch(err=>{
               load.dismiss()
               console.log(err);
//
             })
           })
         }
        },
         {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });

    await actionSheet.present();
  }

}
