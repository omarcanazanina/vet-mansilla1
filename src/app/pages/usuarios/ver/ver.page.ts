import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
})
export class VerPage implements OnInit {
usu:Usuario={}
  constructor(
    private route:ActivatedRoute
  ) { 
    this.usu=route.snapshot.params
  }

  ngOnInit() {
  }

}
