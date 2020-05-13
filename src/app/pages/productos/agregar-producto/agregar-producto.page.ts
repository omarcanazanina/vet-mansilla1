import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FabricasService } from 'src/app/servicios/fabricas.service';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {
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
  imm='https://firebasestorage.googleapis.com/v0/b/aplicacion-bdcf5.appspot.com/o/user%2Fdefault.jpg?alt=media&token=773dd56e-f796-41a1-8a85-d40fe7a9693e'
  constructor(private activate: ActivatedRoute,
    private db: AngularFirestore,
    private service: FabricasService,
    private uiService: UiService,
    private router:Router) { }


  ngOnInit() {
    this.id = this.activate.snapshot.paramMap.get('id')
    this.nombre = this.activate.snapshot.paramMap.get('nombre')
    // console.log(this.id +" "+ this.nombre);

    this.service.recupera_animal_linea(this.id).subscribe(res => {
      this.linea = res[0]
      this.id_ruta = this.linea.id
    })

  }

  guardar() {
    this.uiService.presentAlertConfirm("Seguro que desea guardar el producto",
      () => {
        this.uiService.presentLoading("Guardando producto...").then(load => {
          this.db.collection('/animales-linea/' + this.id_ruta + '/productos').add({
            tipo: this.tipo,
            caracteristicas: this.caracteristicas,
            edad: this.edad,
            raza: this.raza,
            estado: true
          })
          load.dismiss()
          this.uiService.MessageToastSuccess("producto guardada correctamente")
          this.router.navigate(['tabs/fabricas1/listar-productos',this.id,this.nombre])
        })
      })
  }
  galeria() {
    const ejemplogaleria = 'ejemplogaleria'
    this.service.takeGalley().then(res => {
      let load = this.service.loading()
      this.service.uploadImgB64('user/' + ejemplogaleria + 'galery.jpg', res).then(url => {
        alert('se pudo galeria')
        
        //this.urlfinal = url
        //this.au.reducirImagen(url).then( imgreducido =>{} )
        // this.perfil=1
       // this.imm = this.au.actualizarimg({ img: url }, this.usuario.uid)
        load.then(loading => {
          loading.dismiss();
        })
      }).catch(err => alert('error de upload' + err))
    }).catch(err => alert(err))
  }

  camara() {
    const ejemplocamara = 'ejemplocamara'
    this.service.takecamera().then(res => {
      let load = this.service.loading()
      this.service.uploadImgB64('user/' + ejemplocamara + 'camara.jpg', res).then(url => {
        alert('se pudo camara')
        //this.urlfinal = url
        //this.perfil=1
        //this.imm = this.au.actualizarimg({ img: url }, this.usuario.uid)
        //load.then(loading => {
        //  loading.dismiss();
        //})
      }).catch(err => alert('error de upload' + err))
    }).catch(err => alert(err))
  }


}
