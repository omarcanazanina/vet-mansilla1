import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { LineasService } from '../../../servicios/lineas.service';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-agregar-linea',
  templateUrl: './agregar-linea.page.html',
  styleUrls: ['./agregar-linea.page.scss'],
})
export class AgregarLineaPage implements OnInit {
  @Input() id;
  @Input() nombre;

  animal = null
  constructor(private modal: ModalController,
    private db: AngularFirestore,
    private uiService: UiService) { }

  ngOnInit() {
  }

  salir() {
    this.modal.dismiss({
      id: this.id,
      nombre: this.nombre
    })
  }

  aceptar(linea) {
    this.uiService.presentAlertConfirm("Seguro que desea guardar la linea",
      () => {
        this.uiService.presentLoading("Guardando linea...").then(load => {
          this.db.collection('/fabrica/' + this.id + '/linea').add({
            nombre: linea,
            estado: true
          })
            .then(res => {
              console.log(res.id);
              this.db.collection('animales-linea').add({
                nombre: this.animal,
                nombre_linea: linea,
                id_linea: res.id,
                estado: true
              })
            })
          load.dismiss()
          this.uiService.MessageToastSuccess("linea guardada correctamente")
          this.salir()
        })
      })
  }

}
