import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface registerInput {
  email?: string
  password?: string
  confirm_password?: string
  nombre?: string
  telefono?: string
}
@Injectable({
  providedIn: 'root'
})
export class MetodosService {

  constructor(private fireauth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore) { }

  login(email, password) {
    return new Promise((resolve, rejected) => {
      this.fireauth.auth.signInWithEmailAndPassword(email, password).then(res => {
        resolve(rejected)
      }).catch(err => rejected(err))
    })
  }

  cerrarsesion() {
    this.fireauth.auth.signOut().then(res => {
      this.router.navigate(['/login'])
    })
  }

  registro(email: string, password: string, nombre: string, telefono: string) {
    return new Promise((resolve, rejected) => {
      this.fireauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        console.log(res.user.uid);
        this.db.collection('users').doc(res.user.uid).set({
          nombre,
          telefono,
          email,
          password
        })
        this.router.navigate(['/tabs/tab1'])
      }).catch(err => rejected(err))
    })
  }
  registro2(register:registerInput) {
    return  this.fireauth.auth.createUserWithEmailAndPassword(register.email, register.password)
      .then(res => {
        console.log(res.user.uid);
        //delete register.password
        return this.db.collection('users').doc(res.user.uid).set(register)
      })
  }
  //validar contraseñas iguales
  private equalsValidator(otherControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value: any = control.value;
      const otherValue: any = otherControl.value;
      return otherValue === value ? null : { 'notEquals': { value, otherValue } };
    };
  }
  CustomValidators = {
    equals: this.equalsValidator
  }
  //fin
  getcollArrayconkey(coll, query?): Observable<any> {
    return this.db.collection<any>(coll, query)
      .snapshotChanges().pipe(map(change => {
        return change.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() }))
      }))
  }
}
