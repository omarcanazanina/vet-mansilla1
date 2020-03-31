import { Component, OnInit } from '@angular/core';
import { MetodosService } from '../servicios/metodos.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.page.html',
  styleUrls: ['./registrate.page.scss'],
})
export class RegistratePage implements OnInit {
  email: string
  password: string
  nombre: string
  telefono: string
  registerForm:FormGroup
  constructor(private metodos: MetodosService, private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      email: ["", [
        Validators.required,
        //Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.email
      ]
      ],
      password: ["", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]
      ],
      confirm_password: [""],
      nombre: ["", Validators.required],
      telefono: ["", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15)
      ]],
    });
    this.registerForm.get('confirm_password').setValidators([
      this.metodos.CustomValidators.equals(this.registerForm.get('password')),
      Validators.required
    ]);
  }

  ngOnInit() {
  }

  registrate() {
    this.registerForm.value
		delete this.registerForm.value.confirm_password
    //this.metodos.registro(this.email, this.password, this.nombre, this.telefono).then(res => {
    //  this.router.navigate(['/tabs/tab1'])
    //}).catch(err => console.log(err));
    this.metodos.registro2(this.registerForm.value).then(() => {
      this.router.navigate(['/tabs/usuarios'])
      console.log("aceptado");
      
    }).catch(err => console.log(err));
  }

}