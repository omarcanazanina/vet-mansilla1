import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FcmService {
  url = "https://fcm.googleapis.com/fcm/send"
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "key=AAAAG04Vmk0:APA91bGXkuJfVfwKXhPvQNRUvBcKloXrXJ8SZ4jutj7hhRveM0U1CyHtKZFOy6pRBnc6LFWXvv3dAaAu-2QcYGa0m_7gh5VEJugPqa6D3EHQ0jObYIvhLSERwv6JisbP8gcmI8cE4XWt"
  })
  constructor(private http: HttpClient,
    public fire: AngularFirestore,) { }
  //envia mensajes a firebase
  notificacionforToken(titulo: string, body: string, token_cli, id: string, page: string) {
    let notificacion = {
      "notification": {
        "title": titulo,
        "body": body,
        "sound": "default",
        "click_action": "FCM_PLUGIN_ACTIVITY",
        "icon": "fcm_push_icon"
      },
      "data": {
        "landing_page": page,
        "idusu": id,
        "omar":titulo,
        "jaime":body
      },
      "to": token_cli,
      "priority": "high",
      "restricted_package_name": ""
    }
    console.log(notificacion);
    return this.http.post(this.url, notificacion, { headers: this.headers })
      .toPromise()
  }

   //
 recuperatoken(token, id) {
  return this.fire.collection('user').doc(id).set(token, { merge: true })
}


}
