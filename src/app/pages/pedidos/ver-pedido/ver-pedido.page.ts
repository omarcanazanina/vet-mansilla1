import { Component, OnInit } from '@angular/core';

import {Pedido} from '../../../servicios/pedidos.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ver-pedido',
  templateUrl: './ver-pedido.page.html',
  styleUrls: ['./ver-pedido.page.scss'],
})
export class VerPedidoPage implements OnInit {
pedido:Pedido={}
fecha: Date
fechita:any
  constructor(private route:ActivatedRoute) { 
    this.pedido=route.snapshot.params
   // console.log(this.pedido.fecha.getFullYear() +"/"+this.pedido.fecha.getDate());
   //this.fecha = new Date();
   // this.fechita=this.pedido.fecha.getMonth()
   // console.log(this.fechita);
    
    }

  ngOnInit() {
  }

}
