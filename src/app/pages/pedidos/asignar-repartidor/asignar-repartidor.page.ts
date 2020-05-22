import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/servicios/usuario.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Pedido, PedidosService } from 'src/app/servicios/pedidos.service';
import { UiService } from 'src/app/servicios/ui.service';
import { NavController } from '@ionic/angular';

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
  constructor(private Usuario_Service:UsuarioService,
    private route:ActivatedRoute,
    private Pedidos_Service:PedidosService,
    private uiService:UiService,
    private navCtrl: NavController) {
      this.pedido=route.snapshot.params
      console.log(this.pedido);
      
     }

  ngOnInit() {
    this.repSubs = this.Usuario_Service.listarEmpleados("repartidor")
    .subscribe(res => {
      this.repartidores = res
      
    })
  }
  ngOnDestroy(): void {
    this.repSubs.unsubscribe()
  }

  check(item){
    this.asignado = item
    
  }

  asignar(){
    let dato = {}
    dato = {id: this.asignado.id,nombre:this.asignado.nombre}
    this.uiService.presentLoading("Asignando a repartidor...")
    .then(load=>{
    this.Pedidos_Service.asignaRepartidor({ repartidor: dato}, this.pedido.id).then(()=>{
      this.Pedidos_Service.modificaEstado({estado:'ENVIANDO'},this.pedido.id).then(()=>{
      
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
