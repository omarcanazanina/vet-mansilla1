import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import * as moment from 'moment';
moment.locale('es')
@Component({
  selector: 'app-historial-emp',
  templateUrl: './historial-emp.page.html',
  styleUrls: ['./historial-emp.page.scss'],
})
export class HistorialEmpPage implements OnInit {
  usu: any = []
  pedidos: any = []
  historial: any = []
  constructor(private Pedidos_Service: PedidosService,
    private auth: AngularFireAuth,
    private router: Router,
    private usuarioService: UsuarioService,) { }

  ngOnInit() {
    let user = this.auth.auth.currentUser

    this.usuarioService.recuperaundato(user.uid).subscribe(res => {
      this.usu = res
    })

    this.Pedidos_Service.recupera_entregados(user.uid).subscribe(res => {
      this.pedidos = res
      // console.log(this.pedidos);
    })
    this.Pedidos_Service.recupera_historial_Adm().subscribe(datos => {
      this.historial = datos

    })
  }

  convertirFecha(fecha: any) {
    let date = new Date(fecha.seconds * 1000)
    return moment(date).calendar();
  }

  detalle(item) {
    let dato = {
      id: item.id,
      nombre: item.cliente.nombre,
      idcliente: item.cliente.id,
      estado: item.estado,
      fecha: item.fecha.seconds
    }
    this.router.navigate(['/detalle-pedido-emp', dato])
  }

}
