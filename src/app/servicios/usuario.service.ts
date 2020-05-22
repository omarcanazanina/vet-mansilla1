import { Injectable } from '@angular/core';
import { MetodosService } from './metodos.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
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
    private db: AngularFirestore,
    private route:Router,
    private auth: AngularFireAuth,

  ) { }
  recuperaundato(usu_id: string): Observable<any> {
    return this.db.collection('users').doc(usu_id).valueChanges()
  }

  listarEmpleados(rol):Observable<Usuario[]> {
    let query=res=>res.where("rol","==",rol)
    return this.metodoService.getcollArrayconkey('users',query)
  }
  modificarEmpleado(uid:string,data:Usuario){
    console.log(uid,data);
   // const aux = {empleado:{id:[]}} 
    return this.db.collection('users').doc(uid).set(data,{ merge: true })
  }


  cerrarsesion() {
    this.auth.auth.signOut().then(() => {
      this.route.navigate(['/login']);
    });
  }

//  //para recuperar el logueado
//  recuperaid(){
//   return this.db.currentUser.then(res =>{
//     var uid
//     if (res != null) {
//       uid = res.uid;
//       return uid;
//     }
//   })
// }


    
}
