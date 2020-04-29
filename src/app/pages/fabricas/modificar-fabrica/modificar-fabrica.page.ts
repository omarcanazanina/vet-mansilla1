import { Component, OnInit } from '@angular/core';
import{fabrica, FabricasService} from 'src/app/servicios/fabricas.service'
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from 'src/app/servicios/ui.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-modificar-fabrica',
  templateUrl: './modificar-fabrica.page.html',
  styleUrls: ['./modificar-fabrica.page.scss'],
})
export class ModificarFabricaPage implements OnInit {
  //fabrica:fabrica={}
  registerForm: FormGroup
  id
  constructor(private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private uiService:UiService,
    private fabricaService:FabricasService,
    private navCtrl: NavController) {
    let params=route.snapshot.params
    //console.log(params);
    this.id=params.id
    this.registerForm = this.formBuilder.group({
      nombre: [params.nombre, Validators.required],
    });
   }

  ngOnInit() {
  }

  registrate() {
    console.log('en el metodo');
    this.uiService.presentLoading("Modificando Usuario...")
    .then(load=>{
      this.fabricaService.modificarFabrica(this.id,this.registerForm.value).then(() => {
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
