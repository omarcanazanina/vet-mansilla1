import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface fabrica {
  id:string;
  nombre: string;
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
        const data = a.payload.doc.data() as fabrica;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }


    
}
