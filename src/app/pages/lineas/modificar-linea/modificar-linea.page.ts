import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from 'src/app/servicios/ui.service';
import { FabricasService } from 'src/app/servicios/fabricas.service';
import { NavController } from '@ionic/angular';
import { LineasService } from 'src/app/servicios/lineas.service';

@Component({
  selector: 'app-modificar-linea',
  templateUrl: './modificar-linea.page.html',
  styleUrls: ['./modificar-linea.page.scss'],
})
export class ModificarLineaPage implements OnInit {

  idfabrica
  registerForm: FormGroup
  id
  idruta
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private fabricaService: FabricasService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private lineas: LineasService,
  ) {

    let params = route.snapshot.params
    console.log(params);
    this.id = params.id
    this.idfabrica = params.fabrica
    this.idruta = params.id_ruta
    this.registerForm = this.formBuilder.group({
      nombre: [params.nombre, Validators.required],
      animal: [params.animal, Validators.required],
    });
  } 

  ngOnInit() {
  }


  modificar() {
    this.uiService.presentLoading("Modificando Linea...")
      .then(load => {
        this.lineas.modificarLinea(this.idruta, this.registerForm.value).then(() => {
          this.fabricaService.modificarLinea(this.id, this.idfabrica, this.registerForm.value).then(() => {


            load.dismiss()
            this.uiService.MessageToastSuccess("Linea Modificada correctamente")
            this.navCtrl.back()
          })
        })
          .catch(err => {
            console.log(err)
            load.dismiss()
            this.uiService.MessageToastError("Error al modificar la linea")
          });
      })
  }
}
