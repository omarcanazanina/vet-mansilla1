import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import {
  Plugins,
  HapticsImpactStyle,
  Modals,
  ActionSheetOptionStyle
} from '@capacitor/core';

const { Haptics } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(public toastController:ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController
    ) 
  { }
  ///metodos para mensajes
  async MessageToastError(message){
    const toast = await this.toastController.create({
      message,
      color:"danger",
      duration:3000,
    });
    toast.present();
  }
  async MessageToastSuccess(message){
    const toast = await this.toastController.create({
      message,
      color:"success",
      duration:3000,
    });
    toast.present();
  }
  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message: message,
    });
    await loading.present();
    return loading
  }
  async presentAlertConfirm(text,confirm:Function,cancel?:Function) {
    const alert = await this.alertController.create({
      message: text,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            cancel?cancel():""
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            confirm()
          }
        }
      ]
    });
  
    await alert.present();
  }

  /////metodos para la traduccion del error
  //ErrorAuth(message){
  //  switch (message.code) {
  //    case 'auth/wrong-password':
  //      return message = 'La contraseña no es válida o el usuario no tiene una contraseña.';
//
  //      break;
  //    case 'auth/user-not-found':
  //      return message = 'No hay registro de usuario correspondiente a este identificador. El usuario puede haber sido eliminado.';
  //      break;
  //    case 'auth/weak-password':
  //      return message = 'La contraseña debe tener 6 caracteres o más.';
  //    default:
  //      break;
  //  }
  //}
  ///Haptics
  hapticsImpact(style = HapticsImpactStyle.Heavy) {
    Haptics.impact({
      style: style
    });
  }
  //haptics
  hapticsImpactMedium(style) {
    this.hapticsImpact(HapticsImpactStyle.Medium);
  }

  hapticsImpactLight(style) {
    this.hapticsImpact(HapticsImpactStyle.Light);
  }

  hapticsVibrate() {
    Haptics.vibrate();
  }

  hapticsSelectionStart() {
    Haptics.selectionStart();
  }

  hapticsSelectionChanged() {
    Haptics.selectionChanged();
  }

  hapticsSelectionEnd() {
    Haptics.selectionEnd();
  }
  //modals capacitors
  async showAlert() {
    let alertRet = await Modals.alert({
      title: 'Stop',
      message: 'this is an error'
    });
  }
  
  async showConfirm() {
    let confirmRet = await Modals.confirm({
      title: 'Confirm',
      message: 'Are you sure you\'d like to press the red button?'
    });
    console.log('Confirm ret', confirmRet);
  }
  
  async showPrompt(message , inputPlaceholder) {
    let promptRet = await Modals.prompt({
      title: '',
      message,
      inputPlaceholder,
    });
    //console.log('Prompt ret', promptRet);
    return promptRet
  }
  
  async showActions() {
    let promptRet = await Modals.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload'
        },
        {
          title: 'Share'
        },
        {
          title: 'Remove',
          style: ActionSheetOptionStyle.Destructive
        }
      ]
    })
    console.log('You selected', promptRet);
  }

}
