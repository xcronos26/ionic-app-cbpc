import { Component } from '@angular/core';
import { NavController, NavParams ,} from 'ionic-angular';
import { NoticiaPage } from '../noticia/noticia';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name:string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }

  Notificacao(){
    const alert = this.alertCtrl.create({
      title: 'Seja Muito Bem Vindo  ' + this.name,
      subTitle: 'Obrigado por fazer parte da Convenção Batista do Planalto Central',
      buttons: ['OK']
    });
    alert.present();
    this.irpara();
  }


  irpara(){
  this.navCtrl.setRoot(NoticiaPage, {
    name: this.name
 });
}
  
  

}
