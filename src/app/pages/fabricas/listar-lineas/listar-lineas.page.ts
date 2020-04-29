import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ActionSheetController, NavController } from '@ionic/angular';
import { LineasService } from 'src/app/servicios/lineas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AgregarLineaPage } from '../agregar-linea/agregar-linea.page';
import { UiService } from 'src/app/servicios/ui.service';
import { FabricasService } from 'src/app/servicios/fabricas.service';

@Component({
  selector: 'app-listar-lineas',
  templateUrl: './listar-lineas.page.html',
  styleUrls: ['./listar-lineas.page.scss'],
})
export class ListarLineasPage implements OnInit {
  id: any
  nombre: any
  uid: any
  lista_lineas: any
  constructor(private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private router: Router,
    private lineas: LineasService,
    private modal: ModalController,
    private actionSheetController: ActionSheetController,
    private navCtrl: NavController,
    private uiService: UiService,
    private fabricas: FabricasService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre')
    this.lineas.recuperalineas(this.id).subscribe(datos => {
      this.lista_lineas = datos
    })
  }

  async ir() {
    const modal = await this.modal.create({
      component: AgregarLineaPage,
      componentProps: {
        id: this.id,
        nombre: this.nombre,
        //uid:this.uid
      }
    })
    await modal.present()
    const data = await modal.onDidDismiss();
    // console.log('retorno' + data);
  }

  ir_producto(item) {
    //console.log(item);

    this.router.navigate(['/tabs/fabricas/listar-productos', item.id, item.nombre])
  }

  async crud(item) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Ver',
          icon: 'eye',
          handler: () => {
            this.navCtrl.navigateForward(['tabs/fabricas/ver-linea', item])
          }
        },
        {
          text: 'Modificar',
          icon: 'create',
          handler: () => {
            this.navCtrl.navigateForward(['tabs/fabricas/modificar-linea', item])
          }
        },
       //{
       //  text: item.estado ? 'Deshabilitar' : 'Habilitar',
       //  role: 'destructive',
       //  icon: item.estado ? 'trash' : 'power',
       //  handler: () => {
       //    console.log('Delete clicked');
       //    this.uiService.presentLoading("Procesando...")
       //      .then(load => {
       //        this.fabricas.modificarFabrica(item.id, { estado: !item.estado })
       //          .then(() => {
       //            load.dismiss()
       //          })
       //          .catch(err => {
       //            load.dismiss()
       //            console.log(err);

       //          })
       //      })
       //  }
       //},
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
