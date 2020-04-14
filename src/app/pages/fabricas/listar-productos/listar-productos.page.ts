import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage implements OnInit {
  id: any
  nombre: any
  constructor(private activatedRoute: ActivatedRoute,
    private route:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre')
  }

  ir(){
    this.route.navigate(['/tabs/fabricas/agregar-producto',this.id,this.nombre])
  }
}
