import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FabricasService } from 'src/app/servicios/fabricas.service';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-listar-detalles',
  templateUrl: './listar-detalles.page.html',
  styleUrls: ['./listar-detalles.page.scss'],
})
export class ListarDetallesPage implements OnInit {
  id = null
  tipo = null
  idruta = null
  lista_detalles: any
  constructor(private activate: ActivatedRoute,
    private route: Router,
    private service: FabricasService,
    private actionSheetController:ActionSheetController,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.idruta = this.activate.snapshot.paramMap.get('idruta')
    this.id = this.activate.snapshot.paramMap.get('id')
    this.tipo = this.activate.snapshot.paramMap.get('tipo')
    // console.log(this.idruta,this.id +" "+ this.tipo);
    this.service.recuperadetalles(this.idruta, this.id).subscribe(res => {
      this.lista_detalles = res
    })
  }

  ir() {
    this.route.navigate(['/tabs/fabricas/agregar-detalle', this.idruta, this.id, this.tipo])
  }

  async crud(item) {
    console.log(item);
    
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Ver',
          icon: 'eye',
          handler: () => {
            this.navCtrl.navigateForward(['tabs/fabricas/ver-detalle', item])
          }
        },
        {
          text: 'Modificar',
          icon: 'create',
          handler: () => {
            this.navCtrl.navigateForward(['tabs/fabricas/modificar-detalle', item])
          }
        },
        // {
        //   text: item.estado?'Deshabilitar':'Habilitar',
        //   role: 'destructive',
        //   icon: item.estado?'trash':'power',
        //  handler: () => {
        //    console.log('Delete clicked');
        //    this.uiService.presentLoading("Procesando...")
        //    .then(load=>{
        //      this.fabricas.modificarFabrica(item.id,{estado:!item.estado})
        //      .then(()=>{
        //        load.dismiss()
        //      })
        //      .catch(err=>{
        //        load.dismiss()
        //        console.log(err);
        //
        //      })
        //    })
        //  }
        // },
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
