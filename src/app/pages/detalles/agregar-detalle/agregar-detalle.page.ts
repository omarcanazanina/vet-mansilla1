import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UiService } from 'src/app/servicios/ui.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-detalle',
  templateUrl: './agregar-detalle.page.html',
  styleUrls: ['./agregar-detalle.page.scss'],
})
export class AgregarDetallePage implements OnInit {
  registerForm: FormGroup
  id = null
  idruta = null
  tipo = null

  constructor(private activate: ActivatedRoute,
    private db: AngularFirestore,
    private uiService: UiService,
    private router: Router,
    private formBuilder: FormBuilder,) {
    this.registerForm = this.formBuilder.group({
      peso: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ["", Validators.required],
      estado: true
    });
  }

  ngOnInit() {
    this.idruta = this.activate.snapshot.paramMap.get('idruta')
    this.id = this.activate.snapshot.paramMap.get('idproducto')
    this.tipo = this.activate.snapshot.paramMap.get('tipo')
    console.log(this.idruta, this.id);

  }

  // guardar() {
  //   this.uiService.presentAlertConfirm("Seguro que desea guardar el detalle",
  //   () => {
  //     this.uiService.presentLoading("Guardando detalle...").then(load => {
  //       this.db.collection('/animales-linea/' + this.idruta + '/productos/'+this.id +"/detalle").add({
  //         peso: this.peso,
  //         precio: this.precio,
  //         cantidad: this.cantidad
  //       })
  //       load.dismiss()
  //       this.uiService.MessageToastSuccess("detalle guardado correctamente")
  //       this.router.navigate(['tabs/fabricas1/listar-detalles',this.idruta,this.id,this.tipo])
  //     })
  //   })
  // }

  aceptar() {
    console.log(this.registerForm.value);
    this.uiService.presentAlertConfirm("Seguro que desea guardar el detalle",
      () => {
        this.uiService.presentLoading("Guardando detalle...").then(load => {
          this.db.collection('/animales-linea/' + this.idruta + '/productos/' + this.id + "/detalle").add({
            peso: this.registerForm.value.peso,
            precio: this.registerForm.value.precio,
            cantidad: this.registerForm.value.cantidad
          })
          load.dismiss()
          this.uiService.MessageToastSuccess("detalle guardado correctamente")
          this.router.navigate(['tabs/fabricas1/listar-detalles', this.idruta, this.id, this.tipo])
        })
      })
  }
}
