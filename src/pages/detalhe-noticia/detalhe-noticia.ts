import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-noticia',
  templateUrl: 'detalhe-noticia.html',
})
export class DetalheNoticiaPage {
  noticia:any;
  img:any;
  x:any = console.log(this.noticia);
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    
  ) {
    this.noticia = this.navParams.get('noticia');
    
  }
 
  teste(){
    eval(this.noticia);
    console.log("teste de noticia");
    this.x = this.noticia;
  }

  ionViewDidLoad() {
    console.log('agora vai aparecer as noticias aqui',this.x);
  }

}
