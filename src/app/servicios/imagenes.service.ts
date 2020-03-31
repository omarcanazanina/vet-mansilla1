import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import {  DomSanitizer } from '@angular/platform-browser';
import { storage } from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private sanitizer: DomSanitizer,
    private afStorage:AngularFireStorage
    ) {  }

  //seleccionar imagen  base64  con capacitor
  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos
    });
    console.log(image);
    
    //return  this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    return "data:image/jpeg;base64,"+image.base64String
  }

  //uploadimage(base64){
  //    // way 2
  //    let task=this.afStorage.ref(`clientes/${Date.now()}.jpeg`).putString(base64, 'data_url')
  //    .then(url => {console.log("upload success",url)
  //    console.log(url.downloadURL);
  //    
  //    
  //  })
  //    
  //}

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
  //reducir imagen base64
  private reducirImagen(base64) {
		return this.generateFromImage(base64, 600, 600, 1)
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
  // extraer tamaño de imagen
	private getImageSize(data_url) {
		var head = 'data:image/jpeg;base64,';
		return ((data_url.length - head.length) * 3 / 4 / (1024 * 1024)).toFixed(4);
  }
  //converrtir a de base64 a blob
	private dataURLtoBlob(dataURI) {
		// convert base64 to raw binary data held in a string
		var byteString = atob(dataURI.split(',')[1]);
		// separate out the mime component
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
		// write the bytes of the string to an ArrayBuffer
		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		// write the ArrayBuffer to a blob, and you're done

		var bb = new Blob([ab], { type: 'image/jpeg', endings: "native" });
		return bb;
	}
}
