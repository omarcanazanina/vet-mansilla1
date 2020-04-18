import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FabricasService } from 'src/app/servicios/fabricas.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage implements OnInit {
  id: any
  nombre: any
  linea = {
    estado: "",
    id_linea: "",
    nombre: "",
    nombre_linea: "",
    id: ""
  }
  id_ruta: string
  lista_productos:any

  constructor(private activatedRoute: ActivatedRoute,
    private route: Router,
    private service: FabricasService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre')
    this.service.recupera_animal_linea(this.id).subscribe(res => {
      this.linea = res[0]
      this.id_ruta = this.linea.id
      this.service.recuperaproductos(this.id_ruta).subscribe(res1 => {
        this.lista_productos = res1
        //console.log(this.lista_productos);
       // console.log(this.id_ruta);
        
      })
    })
  }

  ir() {
    this.route.navigate(['/tabs/fabricas/agregar-producto', this.id, this.nombre])
  }

  listar_detalles(producto){
    this.route.navigate(['/tabs/fabricas/listar-detalles',this.id_ruta,producto.id,producto.tipo])
  }
}
