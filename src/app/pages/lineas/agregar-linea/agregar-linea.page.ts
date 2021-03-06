import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { UiService } from 'src/app/servicios/ui.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-linea',
  templateUrl: './agregar-linea.page.html',
  styleUrls: ['./agregar-linea.page.scss'],
})
export class AgregarLineaPage implements OnInit {
  registerForm: FormGroup
  @Input() id;
  @Input() nombre;

  animal = null
  constructor(private modal: ModalController,
    private db: AngularFirestore,
    private uiService: UiService,
    private formBuilder: FormBuilder,
    private navCtrl: NavController) {
    this.registerForm = this.formBuilder.group({
      animal: ['', Validators.required],
      nombre: ["", Validators.required],
      estado: true
    });
  }



  ngOnInit() {
  }

  salir() {
    this.modal.dismiss({
      id: this.id,
      nombre: this.nombre
    })
  }

  aceptar() {
    this.uiService.presentAlertConfirm("Seguro que desea guardar la linea",
      () => {
        this.uiService.presentLoading("Guardando Linea...")
          .then(load => {
            this.db.collection('/fabrica/' + this.id + '/linea').add({
              nombre: this.registerForm.value.nombre,
              animal: this.registerForm.value.animal,
              estado: true
            })
              .then(res => {
                console.log(res.id);
                this.db.collection('animales-linea').add({
                  animal: this.registerForm.value.animal,
                  nombre: this.registerForm.value.nombre,
                  id_linea: res.id,
                  estado: true
                }).then(res1 => {
                  console.log(res1.id);
                })
              })
            load.dismiss()
            this.uiService.MessageToastSuccess("linea guardada correctamente")
            this.salir()
          }).catch(err => {
            // console.log(err)
            // //load.dismiss()
            // this.uiService.MessageToastError("Error al guardar la linea")
          });
      })
  }

  // acepta1r(linea) {
  //   this.uiService.presentAlertConfirm("Seguro que desea guardar la linea",
  //     () => {
  //       this.uiService.presentLoading("Guardando linea...").then(load => {
  //         this.db.collection('/fabrica/' + this.id + '/linea').add({
  //           nombre: linea,
  //           animal: this.animal,
  //           estado: true
  //         })
  //           .then(res => {
  //             console.log(res.id);
  //             this.db.collection('animales-linea').add({
  //               animal: this.animal,
  //               nombre: linea,
  //               id_linea: res.id,
  //               estado: true
  //             }).then(res1 => {
  //
  //               console.log(res1.id);
  //             })
  //           })
  //         load.dismiss()
  //         this.uiService.MessageToastSuccess("linea guardada correctamente")
  //         this.salir()
  //       })
  //     })
  // }





}
