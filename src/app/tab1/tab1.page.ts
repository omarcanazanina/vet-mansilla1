import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenesService } from '../servicios/imagenes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private route: Router,
    private imagenes: ImagenesService) { }


  ir() {
    this.route.navigate(['/agregar-usuario'])
  }

  image() {
    this.imagenes.takePicture().then(res => {
      this.imagenes.uploadImgB64("producto1/prueba.jpg", res).then(url => {
        console.log(url);
      })
    }).catch(err => alert('error' + err))
  }


}
