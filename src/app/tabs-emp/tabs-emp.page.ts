import { Component, OnInit } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';
import { UsuarioService } from '../servicios/usuario.service';

const { PushNotifications } = Plugins;
@Component({
  selector: 'app-tabs-emp',
  templateUrl: './tabs-emp.page.html',
  styleUrls: ['./tabs-emp.page.scss'],
})
export class TabsEmpPage implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    PushNotifications.addListener('registration',
    (token: PushNotificationToken) => {
      //alert('Push registration success, token: ' + token.value);
      this.usuarioService.modificarUsuario({token:token.value})
    }
  );
  }
}
