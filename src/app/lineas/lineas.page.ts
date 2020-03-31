import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { LineasService } from '../servicios/lineas.service';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.page.html',
  styleUrls: ['./lineas.page.scss'],
})
export class LineasPage implements OnInit {
  id:any
  nombre:any
  lista_lineas:any
  constructor(private activatedRoute: ActivatedRoute,
    private alertController:AlertController,
    private db:AngularFirestore,
    private lineas:LineasService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre')
    this.lineas.recuperalineas(this.id).subscribe(datos =>{
      this.lista_lineas = datos
    })
    
  }

  async ir() {
    const alert = await this.alertController.create({
      header: 'Crear línea',
      backdropDismiss: false,
      inputs: [
        {
          name: 'linea',
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
            this.db.collection('/fabrica/'+this.id+'/linea').add({
              nombre: dato.linea
            })
          }
        }
      ]
    });
    await alert.present();
  }

}
