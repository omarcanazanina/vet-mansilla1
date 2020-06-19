import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/servicios/usuario.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Pedido, PedidosService } from 'src/app/servicios/pedidos.service';
import { UiService } from 'src/app/servicios/ui.service';
import { NavController } from '@ionic/angular';
import { FcmService } from 'src/app/servicios/fcm.service';

@Component({
  selector: 'app-asignar-repartidor',
  templateUrl: './asignar-repartidor.page.html',
  styleUrls: ['./asignar-repartidor.page.scss'],
})
export class AsignarRepartidorPage implements OnInit {
  pedido:Pedido={}
  repartidores: Usuario[];
  repSubs: Subscription;
  asignado:any = []
  token_empleado:string
  idcliente:string
  cliente:any
  constructor(private Usuario_Service:UsuarioService,
    private route:ActivatedRoute,
    private Pedidos_Service:PedidosService,
    private uiService:UiService,
    private navCtrl: NavController,
    private fcm: FcmService,) {
      this.pedido=route.snapshot.params
      this.idcliente=route.snapshot.params.idcliente
      console.log(this.idcliente);
      this.Usuario_Service.recuperacliente(this.idcliente).subscribe(cliente =>{
        this.cliente=cliente
        
      })
     }

  ngOnInit() {
    this.repSubs = this.Usuario_Service.listarEmpleadosPedidos("repartidor")
    .subscribe(res => {
      this.repartidores = res
    })

  }
  ngOnDestroy(): void {
    this.repSubs.unsubscribe()
  }

  check(item){
    this.asignado = item
    this.token_empleado=this.asignado.token 
  }

  asignar(){
    let dato = {}
    dato = {id: this.asignado.id,nombre:this.asignado.nombre}
   
    this.uiService.presentLoading("Asignando a repartidor...")
    .then(load=>{
    this.Pedidos_Service.asignaRepartidor({ repartidor: dato}, this.pedido.id).then(()=>{
      this.Pedidos_Service.modificaEstado({estado:'ENVIANDO'},this.pedido.id).then(()=>{
      this.fcm.notificacionforToken("VetMansilla", "Se le asigno un pedido " + '' + "" + '' + " ", this.token_empleado, this.token_empleado, "/tabs-emp/pedidos")
      this.fcm.notificacionforToken("VetMansilla", "Su pedido esta siendo enviado " + '' + "" + '' + " ", this.cliente.token, this.cliente.token, "/tabs/pedidos")
      
      load.dismiss()
      this.uiService.MessageToastSuccess("Asignado correctamente")
      this.navCtrl.back()
        
    })
    }).catch(err => {
      console.log(err)
      load.dismiss()
      this.uiService.MessageToastError("Error al asignar el pedido")
    });
    })
  }

}
