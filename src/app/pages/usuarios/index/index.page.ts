import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { UsuarioService, Usuario } from 'src/app/servicios/usuario.service';
import { Subscription, forkJoin } from 'rxjs';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  vendedores: Usuario[]
  repartidores: Usuario[] 
  venSubs: Subscription
  repSubs: Subscription
  constructor(
    private navCtrl: NavController,
    private usuarioService: UsuarioService,
    private uiService: UiService,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    //let valores=forkJoin({
    //  vendedor:this.usuarioService.listarEmpleados("vendedor"),
    //  repartidor:this.usuarioService.listarEmpleados("repartidor")
    //}
    //)
    //valores.subscribe(res=>{
    //  console.log(res);
    //  this.vendedores = res.vendedor
    //  this.repartidores = res.repartidor
    //},err=>console.log(err))
    
    this.venSubs = this.usuarioService.listarEmpleados("vendedor")
      .subscribe(res => {
        console.log(res);
        this.vendedores = res
      })
    this.repSubs = this.usuarioService.listarEmpleados("repartidor")
      .subscribe(res => {
        console.log(res);
        this.repartidores = res
      })
  }
  ngOnDestroy(): void {
    this.venSubs.unsubscribe()
    this.repSubs.unsubscribe()
  }
  crearUsuario() {
    this.navCtrl.navigateForward(['tabs/usuarios/crear'])
  }
  async presentActionSheet(item) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Ver',
          icon: 'eye',
          handler: () => {
            this.navCtrl.navigateForward(['tabs/usuarios/ver',item])
          }
        },
        {
          text: 'Modificar',
          icon: 'create',
          handler: () => {
            this.navCtrl.navigateForward(['tabs/usuarios/modificar',item])
          }
        }, {
          text: item.estado?'Deshabilitar':'Habilitar',
          role: 'destructive',
          icon: item.estado?'trash':'power',
          handler: () => {
            console.log('Delete clicked');
            this.uiService.presentLoading("Procesando...")
            .then(load=>{
              this.usuarioService.modificarEmpleado(item.id,{estado:!item.estado})
              .then(()=>{
                load.dismiss()
              })
              .catch(err=>{
                load.dismiss()
                console.log(err);
                
              })
            })
          }
        }, {
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
}
