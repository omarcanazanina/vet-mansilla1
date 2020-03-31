import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UiService } from 'src/app/servicios/ui.service';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  registerForm: FormGroup
  id
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private uiService:UiService,
    private usuarioService:UsuarioService,
    private route:ActivatedRoute
  ) {
    let params=route.snapshot.params
    this.id=params.id
    this.registerForm = this.formBuilder.group({
      rol: [params.rol, Validators.required],
      nombre: [params.nombre, Validators.required],
      telefono: [params.telefono, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15)
      ]]
    });

  }
  ngOnInit() {
  }
  registrate() {
    this.uiService.presentLoading("Modificando Usuario...")
    .then(load=>{
      this.usuarioService.modificarEmpleado(this.id,this.registerForm.value).then(() => {
        load.dismiss()
        this.uiService.MessageToastSuccess("Usuario Modificado correctamente")
        this.navCtrl.back()
      }).catch(err => {
        console.log(err)
        load.dismiss()
        this.uiService.MessageToastError("Error al modificar el usuario")
      });
    })
  }
}
