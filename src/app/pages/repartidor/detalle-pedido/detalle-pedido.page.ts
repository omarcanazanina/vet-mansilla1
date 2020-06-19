import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService, DetallePedido } from 'src/app/servicios/pedidos.service';
import * as moment from 'moment';
import { UiService } from 'src/app/servicios/ui.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioService } from 'src/app/servicios/usuario.service';
moment.locale('es')
@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.page.html',
  styleUrls: ['./detalle-pedido.page.scss'],
})
export class DetallePedidoPage implements OnInit {
  pedido: DetallePedido = {}
  cliente: any = []
  lista
  detalle: any = []
  estado
  total = 0
  usu:any=[]
  //control
  constructor(private route: ActivatedRoute,
    private Pedidos_Service: PedidosService,
    private uiService: UiService,
    private router:Router,
    private auth: AngularFireAuth,
    private usuarioService: UsuarioService,) {
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
       
      // if(this.usu.email =='adm@gmail.com' && this.estado == 'ENVIANDO'){
      // this.control = 0
      // console.log(this.control);
      // 
      // }else{
      //   if(this.usu.email !='adm@gmail.com' && this.estado == 'ENVIANDO'){
      //    this.control =1
      //   }
      // }
      })
     // console.log(this.detalle);
      this.total=0
      det.forEach(item=>{
        item.detalle.forEach((det:any) => {
          this.total+=det.cant*det.precio
        });
      })
      alert(this.total)
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
              this.router.navigate(['/listar-pedidos'])
            })
            load.dismiss()
            this.uiService.MessageToastSuccess("Pedido entregado correctamente")
          })
      })
  }
}
