import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productos } from 'src/app/servicios/fabricas.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.page.html',
  styleUrls: ['./ver-producto.page.scss'],
})
export class VerProductoPage implements OnInit {
  producto:productos={}
  urlfinal:string
  constructor(private route:ActivatedRoute) {
    this.producto=route.snapshot.params
    this.urlfinal=route.snapshot.params.image
    
   }
  ngOnInit() {
  }

}
