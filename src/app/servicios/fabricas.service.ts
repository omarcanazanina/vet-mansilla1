import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface fabrica {
  id: string;
  nombre: string;
}

export interface animales_linea {
  id: string
  estado: boolean
  id_linea: string
  nombre: string
  nombre_linea: string
}

export interface productos {
  tipo:string,
  estado:boolean,
  edad:string,
  caracteristicas:string,
  raza:string
  id:string
}

@Injectable({
  providedIn: 'root'
})


export class FabricasService {


  constructor(private fireauth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore) { }


  //recupera datos de la fabrica
  recuperafabricas() {
    return this.db.collection('fabrica').snapshotChanges().pipe(map(dat => {
      return dat.map(a => {
        const data = a.payload.doc.data() as fabrica ;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
  // recupera los productos
  recuperaproductos(id:string) {
    return this.db.collection('/animales-linea/'+id+'/productos').snapshotChanges().pipe(map(dat => {
      return dat.map(a => {
        const data = a.payload.doc.data() as productos;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
  //recupera solo un producto
  recupera_animal_linea(id: string): Observable<any> {
    var query = ref => ref.where('id_linea', '==', id)
    return this.db.collection('/animales-linea/', query).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as animales_linea;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

   //recupera datos del detalle
   recuperadetalles(idruta:string, id:string) {
    return this.db.collection('/animales-linea/'+idruta+'/productos/'+id+'/detalle').snapshotChanges().pipe(map(dat => {
      return dat.map(a => {
        const data = a.payload.doc.data() as productos;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

}
