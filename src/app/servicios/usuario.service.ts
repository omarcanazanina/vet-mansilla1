import { Injectable } from '@angular/core';
import { MetodosService } from './metodos.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
export interface Usuario{
  nombre?:string
  telefono?:string
  email?:string
  rol?:string
  estado?:boolean
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private metodoService:MetodosService,
    private db: AngularFirestore
  ) { }
  listarEmpleados(rol):Observable<Usuario[]> {
    let query=res=>res.where("rol","==",rol)
    return this.metodoService.getcollArrayconkey('users',query)
  }
  modificarEmpleado(uid:string,data:Usuario){
    console.log(uid,data);
    
    return this.db.collection('users').doc(uid).set(data,{ merge: true })
  }
}
