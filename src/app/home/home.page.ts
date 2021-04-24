import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}

   public items =  [
     {
       name: "Karla",
      lastName: "Araya"
    },
    {
      name: "José Pablo",
     lastName: "Fernández"
   },
   {
    name: "Alonso",
   lastName: "García"
 },
 {
  name: "María Paula",
 lastName: "Ramírez"
}]

async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Somos el equipo:',
    message: '🔥 Fueguito🔥',
    buttons: ['OK']
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

}
