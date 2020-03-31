import { Component, OnInit } from '@angular/core';
import { MetodosService } from '../../app/servicios/metodos.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string
  password: string
  loginForm: FormGroup
  constructor(
    private metodos: MetodosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm=this.formBuilder.group({
      email: ["", [
        Validators.required,
        //Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.email
      ]],
      password:['', Validators.required],
    })
  }

  ngOnInit() {
    //this.loginForm.get('email').errors
  }

  login() {
    this.loginForm.value
    this.metodos.login(this.loginForm.get('email').value, this.loginForm.get('password').value).then(res => {
      this.router.navigate(['/tabs/usuarios'])
    }).catch(err => alert('datos incorrectos'))
  }

  registro() {
    this.router.navigate(['/registrate'])
  }

}
