import { Component, OnInit } from '@angular/core';
import { linea } from 'src/app/servicios/fabricas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-linea',
  templateUrl: './ver-linea.page.html',
  styleUrls: ['./ver-linea.page.scss'],
})
export class VerLineaPage implements OnInit {
  linea:linea={}

  constructor(private route:ActivatedRoute) {
    this.linea=route.snapshot.params
   }

  ngOnInit() {
  }

}
