import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private Usuario_Service : UsuarioService) { }

  ngOnInit() {
  }

  salir(){
    this.Usuario_Service.cerrarsesion()
  }

}
