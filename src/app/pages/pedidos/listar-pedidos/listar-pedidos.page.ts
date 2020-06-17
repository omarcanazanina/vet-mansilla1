import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { Pedido } from '../../../servicios/pedidos.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
moment.locale('es')
@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.page.html',
  styleUrls: ['./listar-pedidos.page.scss'],
})
export class ListarPedidosPage implements OnInit {
  //pedidos ={
  //  id:'',
  //  cliente:'',
  //  estado:'',
  //  fecha:''
  //}
  //listas
  Enviando
  Pedido
  nuevo: any = []
  ordenado: any = []
  usu
  asignados:any=[]
  constructor(private Pedidos_Service: PedidosService,
    private actionSheetController: ActionSheetController,
    private navCtrl: NavController,
    private auth: AngularFireAuth,
    private usuarioService: UsuarioService,
    private router: Router,

  ) {
    let user = this.auth.auth.currentUser

    this.usuarioService.recuperaundato(user.uid).subscribe(res => {
      this.usu = res
      this.Pedidos_Service.recupera_asignados(user.uid).subscribe(datos =>{
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

  ngOnInit() {
    //this.Pedidos_Service.recuperapedidos().subscribe(res => {
    //  this.pedidos = res
    //})
    this.Pedidos_Service.recupera_Pedidos_Pedido().subscribe(datos => {
      this.Pedido = datos
      console.log(this.Pedido);
      this.Pedidos_Service.recupera_Pedidos_Enviando().subscribe(datos => {
        this.Enviando = datos
        console.log(this.Enviando);
        this.nuevo = [].concat(this.Pedido, this.Enviando);
        this.ordenado = this.Pedidos_Service.ordenarjson(this.nuevo, 'fecha', 'desc')
        console.log(this.ordenado);
        
      })
    })
  
  }


  async metodos(item) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Ver',
          icon: 'eye',
          handler: () => {
            let dato = {
              id: item.id,
              nombre: item.cliente.nombre,
              idcliente: item.cliente.id,
              estado: item.estado,
              fecha: item.fecha.seconds
            }
            this.router.navigate(['/detalle-pedido',dato])
          }
        },
        {
          text: 'Asignar a repartidor',
          icon: 'create',
          handler: () => {
            let dato = {
              id: item.id,
              nombre: item.cliente.nombre,
              idcliente: item.cliente.id,
              estado: item.estado,
              fecha: item.fecha
            }
            this.navCtrl.navigateForward(['tabs/pedidos/asignar-repartidor', dato])
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });

    await actionSheet.present();
  }

  salir() {
    this.usuarioService.cerrarsesion()
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

  convertirFecha(fecha:any){
    let date=new Date(fecha.seconds* 1000)
    return moment(date).calendar();
  }

  historial(){
    this.router.navigate(['/historial'])
  }
}
