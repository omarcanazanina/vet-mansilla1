import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService, DetallePedido } from 'src/app/servicios/pedidos.service';
import { UiService } from 'src/app/servicios/ui.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import { FcmService } from 'src/app/servicios/fcm.service';
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
  usu: any = []
  id_adm="0t5e6bKHmmS13prigt4NyAtxa4F3"
  adm:any
  constructor(private route: ActivatedRoute,
    private Pedidos_Service: PedidosService,
    private uiService: UiService,
    private auth: AngularFireAuth,
    private usuarioService: UsuarioService,
    private nvctrl: NavController,
    private fcm: FcmService,
    private router:Router) {

    this.pedido = route.snapshot.params
    this.estado = this.pedido.estado
    console.log(this.pedido);

    this.Pedidos_Service.recupera_cliente(this.pedido.idcliente).subscribe(cli => {
      this.cliente = cli
      //console.log(this.cliente);
      
    })
    this.Pedidos_Service.recupera_detalle(this.pedido.id).subscribe(det => {
      this.detalle = det
      let user = this.auth.auth.currentUser
      this.usuarioService.recuperaundato(user.uid).subscribe(res => {
        this.usu = res
        //console.log(this.usu);
        
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
    this.usuarioService.recuperaundato(this.id_adm).subscribe(res => {
      this.adm = res
     // console.log(this.adm);
      
    })
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
            this.Pedidos_Service.modificaEstado({ estado: 'ENTREGADO' }, this.pedido.id).then(() => {
              this.fcm.notificacionforToken("VetMansilla", "El pedido fue entregado por el repartidor " + '' + this.usu.nombre + ' al cliente ' + this.cliente.nombre, this.adm.token, this.adm.token, "/tabs/pedidos")
              this.fcm.notificacionforToken("VetMansilla", "El pedido fue entregado por el repartidor " + '' + this.usu.nombre + ' .Muchas gracias. ' + '', this.cliente.token, this.cliente.token, "/tabs/pedidos")
              //falta al cliente
              this.nvctrl.back()
            })
            load.dismiss()
            this.uiService.MessageToastSuccess("Pedido entregado correctamente")
          })
      })
  }
  mapa(){
    this.router.navigate(['mapa-emp',this.pedido])
  }
}
