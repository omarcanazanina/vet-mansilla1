import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FabricasService } from 'src/app/servicios/fabricas.service';
import { UiService } from 'src/app/servicios/ui.service';
import { ActionSheetController } from '@ionic/angular';
import { ImagenesService } from 'src/app/servicios/imagenes.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {
  registerForm: FormGroup
  id = null
  nombre = null
  tipo: string
  caracteristicas: string
  edad: string
  raza: string
  linea = {
    estado: "",
    id_linea: "",
    nombre: "",
    nombre_linea: "",
    id: ""
  }
  id_ruta: string
  urlfinal = 'https://firebasestorage.googleapis.com/v0/b/veterinaria-d43b1.appspot.com/o/user%2Fimg.png?alt=media&token=12a29e9c-937a-4e48-b4f9-37db0ce3f372'
  //fecha
  fecha: Date
  fechita: any

  constructor(private activate: ActivatedRoute,
    private db: AngularFirestore,
    private service: FabricasService,
    private uiService: UiService,
    private router: Router,
    private actionSheetController: ActionSheetController,
    private imagenService: ImagenesService,
    private formBuilder: FormBuilder,) {
    this.registerForm = this.formBuilder.group({
      edad: ['', Validators.required],
      raza: ['', Validators.required],
      tipo: ["", Validators.required],
      caracteristicas: ["", Validators.required],
      estado: true
    });
  }


  ngOnInit() {
    this.id = this.activate.snapshot.paramMap.get('id')
    this.nombre = this.activate.snapshot.paramMap.get('nombre')
    // console.log(this.id +" "+ this.nombre);

    this.service.recupera_animal_linea(this.id).subscribe(res => {
      this.linea = res[0]
      this.id_ruta = this.linea.id
    })

  }
  aceptar() {
    console.log(this.registerForm.value);
    this.uiService.presentAlertConfirm("Seguro que desea guardar el producto",
      () => {
        this.uiService.presentLoading("Guardando producto...").then(load => {
          this.db.collection('/animales-linea/' + this.id_ruta + '/productos').add({
            tipo: this.registerForm.value.tipo,
            caracteristicas: this.registerForm.value.caracteristicas,
            edad: this.registerForm.value.edad,
            raza: this.registerForm.value.raza,
            estado: true,
            image: this.urlfinal
          })
          load.dismiss()
          this.uiService.MessageToastSuccess("producto guardada correctamente")
          this.router.navigate(['tabs/fabricas1/listar-productos', this.id, this.nombre])
        })
      })
  }
  //guardar() {
  //  this.uiService.presentAlertConfirm("Seguro que desea guardar el producto",
  //    () => {
  //      this.uiService.presentLoading("Guardando producto...").then(load => {
  //        this.db.collection('/animales-linea/' + this.id_ruta + '/productos').add({
  //          tipo: this.tipo,
  //          caracteristicas: this.caracteristicas,
  //          edad: this.edad,
  //          raza: this.raza,
  //          estado: true,
  //          image: this.urlfinal
  //        })
  //        load.dismiss()
  //        this.uiService.MessageToastSuccess("producto guardada correctamente")
  //        this.router.navigate(['tabs/fabricas1/listar-productos', this.id, this.nombre])
  //      })
  //    })
  //}
  galeria() {
    this.fecha = new Date();
    const mes = this.fecha.getMonth() + 1;
    this.fechita = this.fecha.getDate() + "-" + mes + "-" + this.fecha.getFullYear() + " " + this.fecha.getHours() + ":" + this.fecha.getMinutes() + ":" + this.fecha.getSeconds();

    //const ejemplogaleria = 'ejemplogaleria'
    this.service.takeGalley().then(res => {
      let load = this.service.loading()
      this.service.uploadImgB64('productos/' + this.fechita + 'galery.jpg', res).then(url => {
        this.urlfinal = url
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
      }).catch(err => alert('error de upload' + err))
    }).catch(err => alert(err))
  }

 // eliminar() {
 //   //this.perfil = 0
 //   let url = 'https://firebasestorage.googleapis.com/v0/b/veterinaria-d43b1.appspot.com/o/user%2Fimg.png?alt=media&token=12a29e9c-937a-4e48-b4f9-37db0ce3f372'
 //   this.urlfinal = this.imagenService.actualizarimg({ image: url }, this.usuario.uid)
 // }


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

}
