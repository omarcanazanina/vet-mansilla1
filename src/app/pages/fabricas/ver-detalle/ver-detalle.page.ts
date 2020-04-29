import { Component, OnInit } from '@angular/core';
import { detalle } from 'src/app/servicios/fabricas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.page.html',
  styleUrls: ['./ver-detalle.page.scss'],
})
export class VerDetallePage implements OnInit {
  detalle:detalle={}

  constructor(private route:ActivatedRoute) {
    this.detalle=route.snapshot.params
   }
  ngOnInit() {
  }

}
