import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {
  id=null
  nombre=null
  constructor(private activate:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activate.snapshot.paramMap.get('id')
    this.nombre = this.activate.snapshot.paramMap.get('nombre')
  }

}
