import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { LoadingController } from 'ionic-angular';
import { DetalheNoticiaPage } from '../detalhe-noticia/detalhe-noticia';

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {
  NomeUsr:string;
  noticiasWP:any = [];

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
      duration: 3000
    });
    loader.present();
  }
  AbreNoticia(noticia:any){

    this.navCtrl.push(DetalheNoticiaPage,{
      noticia:noticia
    });
      console.log("funcionou");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiaPage');
  }

}
