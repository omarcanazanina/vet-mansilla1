import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { LineasService } from '../../../servicios/lineas.service';

@Component({
  selector: 'app-agregar-linea',
  templateUrl: './agregar-linea.page.html',
  styleUrls: ['./agregar-linea.page.scss'],
})
export class AgregarLineaPage implements OnInit {
  @Input() id;
  @Input() nombre;

  constructor(private modal: ModalController,
    private db:AngularFirestore,
    private lineas:LineasService) { }

  ngOnInit() {
  }

  salir() {
    this.modal.dismiss({
      id: this.id,
      nombre: this.nombre
    })
  }

  aceptar(linea, animal) {
    this.db.collection('/fabrica/' + this.id + '/linea').add({
      nombre: linea
    })
    .then(res=>{
      console.log(res.id);
      
    })
    alert('se guardo')
   // this.lineas.recuperalineas(this.id).subscribe(dat=>{
   //   dat.forEach(i =>{
   //     this.lineas.recuperaunalinea(i.nombre).subscribe(res =>{
   //       console.log(res);
   //       
   //     })
   //   })
   // })
  }

//  pruebas(){
//    this.lineas.recuperalineas(this.id).subscribe(dat=>{
//      dat.forEach(i =>{
//        this.lineas.recuperaunalinea('otra',this.id).subscribe(res =>{
//          console.log(res);
//          
//        })
//      })
//    //  dat.forEach(i =>{
//    //    this.lineas.recuperaunalinea(i.nombre).subscribe(res =>{
//    //      console.log(res);
//    //      
//    //    })
//    //  })
//    })
//  }
}
