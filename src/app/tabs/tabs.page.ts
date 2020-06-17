import { Component } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';
import { UsuarioService } from '../servicios/usuario.service';

const { PushNotifications } = Plugins;
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private usuarioService:UsuarioService) {
    
  }

  ngOnInit(): void {
    PushNotifications.addListener('registration',
    (token: PushNotificationToken) => {
      //alert('Push registration success, token: ' + token.value);
      this.usuarioService.modificarUsuario({token:token.value})
    }
  );
  }
}
