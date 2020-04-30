import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface linea {
  id:string;
  nombre: string;
}



export interface animales_linea {
  id: string
  estado: boolean
  id_linea: string
  nombre: string
  nombre_linea: string
}

@Injectable({
  providedIn: 'root'
})
export class LineasService {

  constructor(private db: AngularFirestore) { }

  recuperalineas(id) {
    return this.db.collection('/fabrica/'+id+'/linea').snapshotChanges().pipe(map(dat => {
      return dat.map(a => {
        const data = a.payload.doc.data() as linea;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

   //recupera solo un producto
   recupera_id_animal_linea(id: string): Observable<any> {
    var query = ref => ref.where('id_linea', '==', id)
    return this.db.collection('/animales-linea/', query).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as animales_linea;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

   //modificar linea
   modificarLinea(uid:string, data:linea){
    console.log(uid,data);
    return this.db.collection('/animales-linea').doc(uid).set(data,{ merge: true })
  }


}
