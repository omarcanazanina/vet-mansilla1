import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {
  id=null
  nombre=null
  tipo:string
  caracteristicas:string
  edad:string
  raza:string
  constructor(private activate:ActivatedRoute,
    private db: AngularFirestore) { }

  ngOnInit() {
    this.id = this.activate.snapshot.paramMap.get('id')
    this.nombre = this.activate.snapshot.paramMap.get('nombre')
    console.log(this.id +" "+ this.nombre);
    
  }

  guardar(){
    console.log(this.tipo +' '+this.caracteristicas+' '+this.edad +' '+this.raza);
  // this.db.collection('/user/'+).add({
  //   nombre: this.animal,
  //   nombre_linea: linea,
  //   id_linea: res.id,
  //   estado: true
  // })
  }
}
