import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
moment.locale('es')
@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
pedidos
usu
control
historial
  constructor(private Pedidos_Service: PedidosService,
    private auth: AngularFireAuth,
    private router:Router,
    
    private usuarioService: UsuarioService,) { 
   
    }

  ngOnInit() {

    let user = this.auth.auth.currentUser
  
    this.usuarioService.recuperaundato(user.uid).subscribe(res =>{
     this.usu= res
     
     if(this.usu.email =='adm@gmail.com'){
     this.control = 0
     }else{
      this.control=1
     }
    })

    this.Pedidos_Service.recupera_entregados(user.uid).subscribe(res =>{
      this.pedidos= res
     // console.log(this.pedidos);
    })
     this.Pedidos_Service.recupera_historial_Adm().subscribe(datos =>{
       this.historial=datos
       
     })
  }
  convertirFecha(fecha:any){
    let date=new Date(fecha.seconds* 1000)
    return moment(date).calendar();
  }
  detalle(item){
    let dato = {
      id: item.id,
      nombre: item.cliente.nombre,
      idcliente: item.cliente.id,
      estado: item.estado,
      fecha: item.fecha.seconds
    }
    this.router.navigate(['/detalle-pedido',dato])
  }

}
