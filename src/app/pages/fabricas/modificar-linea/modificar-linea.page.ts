import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UiService } from 'src/app/servicios/ui.service';
import { FabricasService } from 'src/app/servicios/fabricas.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modificar-linea',
  templateUrl: './modificar-linea.page.html',
  styleUrls: ['./modificar-linea.page.scss'],
})
export class ModificarLineaPage implements OnInit {
  idfabrica
  registerForm: FormGroup
  id
  constructor(private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private uiService:UiService,
    private fabricaService:FabricasService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute) {
    let params=route.snapshot.params
    console.log(params);
    this.id=params.id
    this.registerForm = this.formBuilder.group({
      nombre: [params.nombre, Validators.required],
      animal: [params.animal, Validators.required],
    });
   }
  ngOnInit() {
  // this.idfabrica = this.activatedRoute.snapshot.paramMap.get('idfabrica')
  // console.log(this.idfabrica);
    
  }

//registrate() {
//  this.uiService.presentLoading("Modificando Usuario...")
//  .then(load=>{
//    this.fabricaService.modificarLinea(this.id,this.registerForm.value).then(() => {
//      load.dismiss()
//      this.uiService.MessageToastSuccess("Usuario Modificado correctamente")
//      this.navCtrl.back()
//    }).catch(err => {
//      console.log(err)
//      load.dismiss()
//      this.uiService.MessageToastError("Error al modificar el usuario")
//    });
//  })
//}


}
