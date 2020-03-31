import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
import { FabricasService } from 'src/app/servicios/fabricas.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  lista_fabricas: any
  constructor(private router: Router,
    private alertController: AlertController,
    private db: AngularFirestore,
    private fabricas: FabricasService,
    private actionSheetController: ActionSheetController,
    private uiService: UiService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.listar_fabricas()
  }


  async ir() {

    const alert = await this.alertController.create({
      header: 'Crear fábrica',
      backdropDismiss: false,
      inputs: [
        {
          name: 'fabrica',
          type: 'text',
          placeholder: 'Nombre '
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: dato => {
           
            this.uiService.presentAlertConfirm("Seguro que desea guardar la fabrica",
              () => {
                this.uiService.presentLoading("Guardando fabrica...")
                  .then(load => {
                    this.db.collection('fabrica').add({
                      nombre: dato.fabrica
                    })
                    
                    load.dismiss()
                    this.uiService.MessageToastSuccess("fabrica guardado correctamente")
                  })
              })
          }
        }
      ]
    });
    await alert.present();


  }

  listar_fabricas() {
    this.fabricas.recuperafabricas().subscribe(datos => {
      this.lista_fabricas = datos
      console.log(this.lista_fabricas);

    })
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Ver',
          icon: 'eye',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Modificar',
          icon: 'create',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
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

  ir_linea(item) {
      this.router.navigate(['/tabs/fabricas/listar-lineas', item.id, item.nombre])
  }

}
