import { Component, OnInit } from '@angular/core';
import { FabricasService } from 'src/app/servicios/fabricas.service';
import { AlertController, ActionSheetController, NavController } from '@ionic/angular';
import { UiService } from 'src/app/servicios/ui.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  lista_fabricas: any
  usu
  control 
  constructor(private fabricas: FabricasService,
    private alertController: AlertController,
    private uiService: UiService,
    private db: AngularFirestore,
    private actionSheetController: ActionSheetController,
    private navCtrl: NavController,
    private router: Router,
    private auth: AngularFireAuth,
    private usuarioService: UsuarioService) {
    this.listar_fabricas()

    let user = this.auth.auth.currentUser

    this.usuarioService.recuperaundato(user.uid).subscribe(res => {
      this.usu = res
      if (this.usu.email == 'adm@gmail.com') {
        this.control = 0

      } else {
        this.control = 1
        this.router.navigate(['/listar-pedidos'])
      }
    })

  }

  ngOnInit() {
  
  }

  listar_fabricas() {
    this.fabricas.recuperafabricas().subscribe(datos => {
      this.lista_fabricas = datos
      console.log(this.lista_fabricas);

    })
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
                      nombre: dato.fabrica,
                      estado: true
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

  async crud(item) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Ver',
          icon: 'eye',
          handler: () => {
            this.navCtrl.navigateForward(['tabs/fabricas1/ver-fabrica', item])
          }
        },
        {
          text: 'Modificar',
          icon: 'create',
          handler: () => {
            this.navCtrl.navigateForward(['tabs/fabricas1/modificar-fabrica', item])
          }
        }, {
          text: item.estado ? 'Deshabilitar' : 'Habilitar',
          role: 'destructive',
          icon: item.estado ? 'trash' : 'power',
          handler: () => {
            console.log('Delete clicked');
            this.uiService.presentLoading("Procesando...")
              .then(load => {
                this.fabricas.modificarFabrica(item.id, { estado: !item.estado })
                  .then(() => {
                    load.dismiss()
                  })
                  .catch(err => {
                    load.dismiss()
                    console.log(err);

                  })
              })
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
    this.router.navigate(['/tabs/fabricas1/listar-lineas', item.id, item.nombre])
    // this.router.navigate(['/tabs/lineas/listar-lineas', item.id, item.nombre])
  }


}
