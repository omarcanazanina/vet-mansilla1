import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UiService } from 'src/app/servicios/ui.service';
import { FabricasService } from 'src/app/servicios/fabricas.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modificar-detalle',
  templateUrl: './modificar-detalle.page.html',
  styleUrls: ['./modificar-detalle.page.scss'],
})
export class ModificarDetallePage implements OnInit {

  registerForm: FormGroup
  id
  idlinea
  idproducto
  constructor(private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private uiService:UiService,
    private fabricaService:FabricasService,
    private navCtrl: NavController) {
    let params=route.snapshot.params
    //console.log(params);
    this.id=params.id
    this.idlinea = params.idlinea
    this.idproducto = params.idproducto
    this.registerForm = this.formBuilder.group({
      cantidad: [params.cantidad, Validators.required],
      peso: [params.peso, Validators.required],
      precio: [params.precio, Validators.required],
    });
   }
  ngOnInit() {
  }

  modificar() {
    this.uiService.presentLoading("Modificando Detalle...")
      .then(load => {
        this.fabricaService.modificarDetalle(this.id, this.idlinea,this.idproducto, this.registerForm.value).then(() => {
          load.dismiss()
          this.uiService.MessageToastSuccess("Detalle Modificado correctamente")
          this.navCtrl.back()
        })
          .catch(err => {
            console.log(err)
            load.dismiss()
            this.uiService.MessageToastError("Error al modificar el detalle")
          });
      })
  }


}
