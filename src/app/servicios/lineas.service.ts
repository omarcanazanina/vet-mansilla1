import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface linea {
  id:string;
  nombre: string;
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

}
