import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UiService } from 'src/app/servicios/ui.service';
import { FabricasService } from 'src/app/servicios/fabricas.service';
import { NavController, ActionSheetController } from '@ionic/angular';
import { ImagenesService } from 'src/app/servicios/imagenes.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.page.html',
  styleUrls: ['./modificar-producto.page.scss'],
})
export class ModificarProductoPage implements OnInit {
  registerForm: FormGroup
  id
  id_ruta
  urlfinal:string
   //fecha
   fecha: Date
   fechita: any

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private fabricaService: FabricasService,
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    private service: FabricasService,
    private imagenesService:ImagenesService) {
    let params = route.snapshot.params
    this.urlfinal = params.image
    console.log(params);
    this.id = params.id
    this.id_ruta = params.id_ruta
   // alert('esta es la ruta del prod'+this.id)
    this.registerForm = this.formBuilder.group({
      tipo: [params.tipo, Validators.required],
      raza: [params.raza, Validators.required],
      edad: [params.edad, Validators.required],
      caracteristicas: [params.caracteristicas, Validators.required],
    });
  }
  ngOnInit() {
  }

  modificar() {
    this.uiService.presentLoading("Modificando Producto...")
      .then(load => {
        this.fabricaService.modificarProducto(this.id, this.id_ruta, this.registerForm.value).then(() => {
          load.dismiss()
          this.uiService.MessageToastSuccess("Producto Modificado correctamente")
          this.navCtrl.back()
        })
          .catch(err => {
            console.log(err)
            load.dismiss()
            this.uiService.MessageToastError("Error al modificar el producto")
          });
          
      })
  }


  async funciones() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Foto de perfil',
      buttons: [
        //  {
        //  text: 'Eliminar foto',
        //  role: 'destructive',
        //  icon: 'trash',
        //  handler: () => {
        //    // this.perfil = 0
        //    this.eliminar()
        //    console.log('Delete clicked');
        //  }
        //},
        {
          text: 'Camara',
          icon: 'camera',
          handler: () => {
            this.camara()
            console.log('Share clicked');
          }
        }, {
          text: 'Galeria',
          icon: 'image',
          handler: () => {
            this.galeria()
            console.log('Play clicked');
          }
        },]
    });
    await actionSheet.present();
  }

  galeria() {
    this.fecha = new Date();
    const mes = this.fecha.getMonth() + 1;
    this.fechita = this.fecha.getDate() + "-" + mes + "-" + this.fecha.getFullYear() + " " + this.fecha.getHours() + ":" + this.fecha.getMinutes() + ":" + this.fecha.getSeconds();

    //const ejemplogaleria = 'ejemplogaleria'
    this.service.takeGalley().then(res => {
      let load = this.service.loading()
      this.service.uploadImgB64('productos/' + this.fechita + 'galery.jpg', res).then(url => {
        this.urlfinal = url

      // this.imm = this.au.actualizarimg({ img: url }, this.usuario.uid)
         this.imagenesService.actualizarimg({image:url},this.id_ruta,this.id)
        load.then(loading => {
          loading.dismiss();
        })
      }).catch(err => alert('error de upload' + err))
    }).catch(err => alert(err))
  }

  camara() {
    this.fecha = new Date();
    const mes = this.fecha.getMonth() + 1;
    this.fechita = this.fecha.getDate() + "-" + mes + "-" + this.fecha.getFullYear() + " " + this.fecha.getHours() + ":" + this.fecha.getMinutes() + ":" + this.fecha.getSeconds();

    // const ejemplocamara = 'ejemplocamara'
    this.service.takecamera().then(res => {
      let load = this.service.loading()
      this.service.uploadImgB64('productos/' + this.fechita + 'camara.jpg', res).then(url => {
        this.urlfinal = url
        this.imagenesService.actualizarimg({image:url},this.id_ruta,this.id)
      }).catch(err => alert('error de upload' + err))
    }).catch(err => alert(err))
  }

}
