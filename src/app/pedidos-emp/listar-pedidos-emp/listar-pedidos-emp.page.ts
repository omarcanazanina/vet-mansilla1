import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as moment from 'moment';
import { Router } from '@angular/router';
moment.locale('es')

@Component({
  selector: 'app-listar-pedidos-emp',
  templateUrl: './listar-pedidos-emp.page.html',
  styleUrls: ['./listar-pedidos-emp.page.scss'],
})
export class ListarPedidosEmpPage implements OnInit {

  asignados: any = []
  usu:any = []
  constructor(private Pedidos_Service: PedidosService,
    private usuarioService: UsuarioService,
    private auth: AngularFireAuth,
    private router:Router
    ) { }

  ngOnInit() {
    let user = this.auth.auth.currentUser
    this.usuarioService.recuperaundato(user.uid).subscribe(res => {
      this.usu = res
      this.Pedidos_Service.recupera_asignados(user.uid).subscribe(datos => {
        this.asignados = datos
        console.log(this.asignados);

        // for (let i = 0; i < this.asignados.length; i++) {
        //   const element = this.asignados[i];
        //   //console.log(element.id);
        //   this.Pedidos_Service.recupera_detalle(element.id).subscribe(det =>{
        //    // console.log(det);
        //     
        //   })
        // }

      })
    })
  }

  detalle(item){
   // console.log(item);
    
    let dato = {
      id: item.id,
      nombre: item.cliente.nombre,
      idcliente: item.cliente.id,
      estado: item.estado,
      fecha: item.fecha.seconds,
      lat: item.latlng.lat,
      lng: item.latlng.lng
    }
    this.router.navigate(['/detalle-pedido-emp',dato])
  }

  convertirFecha(fecha:any){
    let date=new Date(fecha.seconds* 1000)
    return moment(date).calendar();
  }
  historial(){
    this.router.navigate(['/historial-emp'])
  }


}
