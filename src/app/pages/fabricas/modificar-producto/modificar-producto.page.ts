import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UiService } from 'src/app/servicios/ui.service';
import { FabricasService } from 'src/app/servicios/fabricas.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.page.html',
  styleUrls: ['./modificar-producto.page.scss'],
})
export class ModificarProductoPage implements OnInit {

  registerForm: FormGroup
  id
  constructor(private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private uiService:UiService,
    private fabricaService:FabricasService,
    private navCtrl: NavController) {
    let params=route.snapshot.params
    console.log(params);
    this.id=params.id
    this.registerForm = this.formBuilder.group({
      tipo: [params.tipo, Validators.required],
      raza: [params.raza, Validators.required],
      edad: [params.edad, Validators.required],
      caracteristicas: [params.caracteristicas, Validators.required],
    });
   }
  ngOnInit() {
  }

}
