import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Pedido {
  id?: string;
  cliente?: string;
  estado?: string;
  fecha?: Date;
}

export interface DetallePedido {
  id?: string;
  cliente?: string;
  estado?: string;
  fecha?: Date;
  idcliente?: string;
  detalle?: []
}


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private db: AngularFirestore) { }

  //recupera datos de los pedidos
  recuperapedidos() {
    return this.db.collection('pedidos').snapshotChanges().pipe(map(dat => {
      return dat.map(a => {
        const data = a.payload.doc.data() as Pedido;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  //recupera los pedidos entregados
  recupera_Pedidos(estado = 'ENTREGADO'): Observable<any> {
    var query = ref => ref.where('estado', '==', estado)
    return this.db.collection('/pedidos', query).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Pedido;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  //asigna pedido al repartidor
  asignaRepartidor(repartidor, id) {
    return this.db.collection('pedidos').doc(id).set(repartidor, { merge: true })
  }

  //modificar estado del pedido
  modificaEstado(estado, id) {
    return this.db.collection('pedidos').doc(id).set(estado, { merge: true })
  }
  //recupera los pedidos asignados
  recupera_asignados(dato, estado = 'ENVIANDO'): Observable<any> {
    var query = ref => ref.where('repartidor.id', '==', dato).where('estado', '==', estado)
    return this.db.collection('/pedidos', query).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Pedido;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  //recupera los pedidos entregados
  recupera_entregados(dato, estado = 'ENTREGADO'): Observable<any> {
    var query = ref => ref.where('repartidor.id', '==', dato).where('estado', '==', estado)
    return this.db.collection('/pedidos', query).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Pedido;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
  //recupera los pedidos entregados para el adm
  recupera_historial_Adm( estado = 'ENTREGADO'): Observable<any> {
    var query = ref => ref.where('estado', '==', estado)
    return this.db.collection('/pedidos', query).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Pedido;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  //para recuperar detalle del pedido
  recupera_detalle(id: string) {
    return this.db.collection('/pedidos/' + id + '/productosDet').snapshotChanges().pipe(map(dat => {
      return dat.map(a => {
        const data = a.payload.doc.data() as DetallePedido;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
  //recupera un cliente
  recupera_cliente(cliente_id: string): Observable<any> {
    return this.db.collection('clientes').doc(cliente_id).valueChanges()
  }
}
