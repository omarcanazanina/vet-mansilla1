import { Component } from '@angular/core';
import { MetodosService } from '../servicios/metodos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( private metodos: MetodosService) {}


  cerrar(){
    this.metodos.cerrarsesion()
  }
}
