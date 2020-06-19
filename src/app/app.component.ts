import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core';
import { FcmService } from './servicios/fcm.service';
import { Router } from '@angular/router';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  uidusu = '0t5e6bKHmmS13prigt4NyAtxa4F3'
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FcmService,
    private toastController: ToastController,
    private route:Router
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     // alert('estamos en el appmodule')

      PushNotifications.requestPermissions().then(result => {
        //alert(JSON.stringify(result))
        if (!!result) {
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
        } else {
          // Show some error
          alert('error permosos')
        }
      });

      PushNotifications.addListener('registrationError',
        (error: any) => {
          alert('Error on registration: ' + JSON.stringify(error));
        }
      );
      //abierta
      PushNotifications.addListener('pushNotificationReceived',
        (notification: PushNotification) => {
        this.confirma(notification.data.omar, notification.data.jaime, notification.data.landing_page)
          //alert('Push received: ' + JSON.stringify(notification));
        }
      );
      //background
      PushNotifications.addListener('pushNotificationActionPerformed',
        (notification: PushNotificationActionPerformed) => {
          alert('Push action performed: ' + JSON.stringify(notification));
        }
      );
    });

    


  }
  async confirma(t,m,ruta) {
    const toast = await this.toastController.create({
      header: t,
      message: m,
      position: 'top',
      buttons: [
     {
          text: 'Aceptar',
          role: 'cancel',
          handler: () => {  
            this.route.navigate(ruta)
          }
        }
      ]
    });
    toast.present();
  }


}
