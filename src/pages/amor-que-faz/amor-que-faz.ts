import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AmorQueFazPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amor-que-faz',
  templateUrl: 'amor-que-faz.html',
})
export class AmorQueFazPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Obrigado!',
      subTitle: 'Sua doação ao Projeto AQF foi enviada!, agradecemos a Deus pela sua participação e por tudo que Ele ja tem feito na sua vida!',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmorQueFazPage');
  }

}
