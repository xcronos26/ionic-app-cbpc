import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AmorQueFazPage } from '../pages/amor-que-faz/amor-que-faz';
import { VocatioPage } from '../pages/vocatio/vocatio';
import { OrePage } from '../pages/ore/ore';
import { FinanceiroPage } from '../pages/financeiro/financeiro';
import { AgendaPage } from '../pages/agenda/agenda';
import { InscriçõesPage } from '../pages/inscrições/inscrições';
import { AtualizePage } from '../pages/atualize/atualize';
import { ContatoPage } from '../pages/contato/contato';
import { OrganizacoesPage } from '../pages/organizacoes/organizacoes';
import { NoticiaPage } from '../pages/noticia/noticia';
import { AboutPage } from '../pages/about/about';
import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';

@Component({
  templateUrl: 'app.html',
  providers:[
    ConfigProvider
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  NomeUsr:string;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public configProvider: ConfigProvider,
               
              ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: NoticiaPage },
      { title: 'Atualize', component: AtualizePage },
      { title: 'List', component: ListPage },
      { title: 'Ore+', component: OrePage },
      { title: 'Vocatio', component: VocatioPage },
      { title: 'Amor Que Faz', component: AmorQueFazPage },
      { title: 'Financeiro', component: FinanceiroPage },
      { title: 'Agenda', component: AgendaPage },
      { title: 'Inscrições', component: InscriçõesPage },
      { title: 'Organizações', component: OrganizacoesPage },
      { title: 'Contato', component: ContatoPage },
      { title: 'Sobre', component: AboutPage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = this.configProvider.getConfigData();
      if(config == null){
        this.rootPage = IntroPage;
        this.configProvider.setConfigData(false);
      }else{
        this.rootPage = NoticiaPage;
        
        
      }

      console.log(config);


      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
