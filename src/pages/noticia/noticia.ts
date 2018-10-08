import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {
  NomeUsr:string;
  noticiasWP:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public servidor:ServidorProvider,
    public loadingCtrl: LoadingController
    ) {
    this.getRetornar();
    this.NomeUsr = this.navParams.get('name');
  console.log(name);
   this.presentLoading()

  }
  getRetornar(){

    this.servidor.getPegarN()
    .subscribe(
       data => this.noticiasWP = data,
       err => console.log(err)
     );

  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 4000
    });
    loader.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiaPage');
  }

}
