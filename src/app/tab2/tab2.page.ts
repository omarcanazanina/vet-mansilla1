import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { FabricasService } from '../servicios/fabricas.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  lista_fabricas:any
  constructor(private router: Router,
    private alertController: AlertController,
    private db:AngularFirestore,
    private fabricas:FabricasService,
    private actionSheetController:ActionSheetController) { }

  ngOnInit(){
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
            console.log(dato.fabrica);
            this.db.collection('fabrica').add({
              nombre: dato.fabrica
            })
          }
        }
      ]
    });
    await alert.present();
  }

  listar_fabricas(){
    this.fabricas.recuperafabricas().subscribe(datos =>{
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

  ir_linea(item){
    this.router.navigate(['/lineas',item.id,item.nombre])
  }
}
