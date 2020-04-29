import { Component, OnInit } from '@angular/core';
import{fabrica} from 'src/app/servicios/fabricas.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ver-fabrica',
  templateUrl: './ver-fabrica.page.html',
  styleUrls: ['./ver-fabrica.page.scss'],
})
export class VerFabricaPage implements OnInit {
  fabrica:fabrica={}

  constructor(private route:ActivatedRoute) {
    this.fabrica=route.snapshot.params
   }

  ngOnInit() {
  }

}
