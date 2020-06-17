import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService, DetallePedido } from 'src/app/servicios/pedidos.service';
import { UiService } from 'src/app/servicios/ui.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
moment.locale('es')
@Component({
  selector: 'app-detalle-pedido-emp',
  templateUrl: './detalle-pedido-emp.page.html',
  styleUrls: ['./detalle-pedido-emp.page.scss'],
})
export class DetallePedidoEmpPage implements OnInit {
  pedido: DetallePedido = {}
  estado
  cliente: any = []
  detalle: any = []
  usu:any=[]
  constructor(private route: ActivatedRoute,
    private Pedidos_Service: PedidosService,
    private uiService: UiService,
    private auth: AngularFireAuth,
    private usuarioService: UsuarioService,
    private nvctrl:NavController) { 

    this.pedido = route.snapshot.params
    this.estado= this.pedido.estado
      //console.log(this.pedido);
      
    this.Pedidos_Service.recupera_cliente(this.pedido.idcliente).subscribe(cli => {
      this.cliente = cli
    })
    this.Pedidos_Service.recupera_detalle(this.pedido.id).subscribe(det => {
      this.detalle = det
      
      let user = this.auth.auth.currentUser
  
      this.usuarioService.recuperaundato(user.uid).subscribe(res =>{
       this.usu= res
       
      //if(this.usu.email =='adm@gmail.com' && this.estado == 'ENVIANDO'){
      //this.control = 0
      //console.log(this.control);
      //
      //}else{
      //  if(this.usu.email !='adm@gmail.com' && this.estado == 'ENVIANDO'){
      //   this.control =1
      //  }
      //}
      })
     // console.log(this.detalle);
      //this.total=0
      //det.forEach(item=>{
      //  item.detalle.forEach(det => {
      //    console.log(det.cant);
      //    
      //   // this.total+=det.cant*det.precio
      //  });
      //})
    })
  }

  ngOnInit() {
  }

  convertirFecha(fecha: any) {
    let date = new Date(fecha * 1000)
    return moment(date).calendar();
  }
  entregar() {
    this.uiService.presentAlertConfirm("Seguro que quiere registrar como entregado?",
      () => {
        this.uiService.presentLoading("Guardando datos..")
          .then(load => {
            this.Pedidos_Service.modificaEstado({ estado: 'ENTREGADO' }, this.pedido.id).then(()=>{
             this.nvctrl.back()
            })
            load.dismiss()
            this.uiService.MessageToastSuccess("Pedido entregado correctamente")
          })
      })
  }
}
