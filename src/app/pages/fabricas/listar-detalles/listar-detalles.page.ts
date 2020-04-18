import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FabricasService } from 'src/app/servicios/fabricas.service';

@Component({
  selector: 'app-listar-detalles',
  templateUrl: './listar-detalles.page.html',
  styleUrls: ['./listar-detalles.page.scss'],
})
export class ListarDetallesPage implements OnInit {
  id = null
  tipo = null
  idruta = null
  lista_detalles: any
  constructor(private activate: ActivatedRoute,
    private route: Router,
    private service: FabricasService) { }

  ngOnInit() {
    this.idruta = this.activate.snapshot.paramMap.get('idruta')
    this.id = this.activate.snapshot.paramMap.get('id')
    this.tipo = this.activate.snapshot.paramMap.get('tipo')
    // console.log(this.idruta,this.id +" "+ this.tipo);
    this.service.recuperadetalles(this.idruta, this.id).subscribe(res => {
      this.lista_detalles = res
    })
  }

  ir() {
    this.route.navigate(['/tabs/fabricas/agregar-detalle', this.idruta, this.id, this.tipo])
  }

}
