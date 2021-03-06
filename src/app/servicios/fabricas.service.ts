import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';
import { ImagenesService } from './imagenes.service';
//
export interface fabrica {
  id?: string;
  nombre?: string;
  estado?: boolean
}

export interface linea {
  id?: string;
  animal?: string;
  estado?: boolean;
  nombre?: string
}



export interface animales_linea {
  id: string
  estado: boolean
  id_linea: string
  nombre: string
  nombre_linea: string
}

export interface productos {
  tipo?: string,
  estado?: boolean,
  edad?: string,
  caracteristicas?: string,
  raza?: string
  id?: string
}

export interface detalle {
  cantidad?: number,
  peso?: number,
  precio?: number,
  id?: string
}

@Injectable({
  providedIn: 'root'
})


export class FabricasService {


  constructor(private fireauth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore,
    private camera: Camera,
    private afStorage: AngularFireStorage,
    private loadingController: LoadingController,
    private imagenes_Service: ImagenesService) { }


  //recupera datos de la fabrica
  recuperafabricas() {
    return this.db.collection('fabrica').snapshotChanges().pipe(map(dat => {
      return dat.map(a => {
        const data = a.payload.doc.data() as fabrica;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
  //modificar fabrica
  modificarFabrica(uid: string, data: fabrica) {
    console.log(uid, data);
    return this.db.collection('fabrica').doc(uid).set(data, { merge: true })
  }
  //modificar linea
  modificarLinea(uid: string, idfabrica: string, data: fabrica) {
    console.log(uid, data);
    return this.db.collection('/fabrica/' + idfabrica + '/linea').doc(uid).set(data, { merge: true })
  }

  // recupera los productos
  recuperaproductos(id: string) {
    return this.db.collection('/animales-linea/' + id + '/productos').snapshotChanges().pipe(map(dat => {
      return dat.map(a => {
        const data = a.payload.doc.data() as productos;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
  //recupera solo un producto
  recupera_animal_linea(id: string): Observable<any> {
    var query = ref => ref.where('id_linea', '==', id)
    return this.db.collection('/animales-linea/', query).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as animales_linea;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  //recupera datos del detalle
  recuperadetalles(idruta: string, id: string) {
    return this.db.collection('/animales-linea/' + idruta + '/productos/' + id + '/detalle').snapshotChanges().pipe(map(dat => {
      return dat.map(a => {
        const data = a.payload.doc.data() as productos;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  estado_fabrica(id, estado) {
    return this.db.collection('fabrica').doc(id).set(estado, { merge: true })
  }


  takecamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    return this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      return this.imagenes_Service.reducirImagen(base64Image).then(imgsmall => {
        return imgsmall
      })
    });
  }

  takeGalley() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE
    }

    return this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      return this.imagenes_Service.reducirImagen(base64Image).then(imgsmall => {
        return imgsmall
      })
    });
  }

  // subir imagen base 64
  uploadImgB64(path: string, imageB64): Promise<any> {
    return new Promise((resolve, reject) => {
      let ref = this.afStorage.ref(path)
      let task = ref.putString(imageB64, 'data_url');
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(data => {
            console.log(data);
            resolve(data)
          })
        })
      )
        .subscribe()
    });
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Espere por favor...',
      duration: 2000
    });
    await loading.present();
    return loading;
  }

  //recupera 
  recupera_id_animal_linea(id: string): Observable<any> {
    var query = ref => ref.where('id_linea', '==', id)
    return this.db.collection('/animales-linea/', query).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as animales_linea;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  //modificar linea
  modificarProducto(uid: string, id_ruta: string, data: linea) {
    console.log(uid, data);
    return this.db.collection('/animales-linea/' + id_ruta + '/productos').doc(uid).set(data, { merge: true })
  }
  //modificar linea
  modificarDetalle(uid: string, idlinea: string, idproducto: string, data: linea) {
    console.log(uid, data);
    return this.db.collection('/animales-linea/' + idlinea + '/productos/' + idproducto + '/detalle').doc(uid).set(data, { merge: true })
  }

  //reducir imagen base64
  private reducirImagen(base64) {
    return this.generateFromImage(base64, 500, 500, 1)
      .then(data => {
        //this.smallImg = data;
        //this.smallSize = this.getImageSize(this.smallImg);
        //return { base64: data, size: this.getImageSize(this.smallImg), blob: this.dataURLtoBlob(data) }
        //return this.dataURLtoBlob(data)
        return data
      });
  }
  //imagen resize
  private generateFromImage(img, MAX_WIDTH: number = 1025, MAX_HEIGHT: number = 1025, quality: number = 1): Promise<string> {
    return new Promise((resolve, reject) => {

      var canvas: any = document.createElement("canvas");
      var image = new Image();

      image.onload = () => {
        var width = image.width;
        var height = image.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");

        ctx.drawImage(image, 0, 0, width, height);

        // IMPORTANT: 'jpeg' NOT 'jpg'
        var dataUrl = canvas.toDataURL('image/jpeg', quality);

        resolve(dataUrl)
      }
      image.src = img;
    })
  }

}
