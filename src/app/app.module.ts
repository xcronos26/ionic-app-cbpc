import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AmorQueFazPage } from '../pages/amor-que-faz/amor-que-faz';
import { VocatioPage } from '../pages/vocatio/vocatio';
import { OrePage } from '../pages/ore/ore';
import { FinanceiroPage } from '../pages/financeiro/financeiro';
import { AgendaPage } from '../pages/agenda/agenda';
import { InscriçõesPage } from '../pages/inscri\u00E7\u00F5es/inscri\u00E7\u00F5es';
import { AtualizePage } from '../pages/atualize/atualize';
import { ContatoPage } from '../pages/contato/contato';
import { OrganizacoesPage } from '../pages/organizacoes/organizacoes';
import { NoticiaPage } from '../pages/noticia/noticia';
import { AboutPage } from '../pages/about/about';
import { ComprovantePPage } from '../pages/comprovante-p/comprovante-p';
import { MoovieProvider } from '../providers/moovie/moovie';
import { IntroPage } from '../pages/intro/intro';
import { IntroPageModule } from '../pages/intro/intro.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AmorQueFazPage,
    VocatioPage,
    OrePage,
    FinanceiroPage,
    AgendaPage,
    InscriçõesPage,
    AtualizePage,
    ContatoPage,
    OrganizacoesPage,
    NoticiaPage,
    AboutPage,
    ComprovantePPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AmorQueFazPage,
    VocatioPage,
    OrePage,
    FinanceiroPage,
    AgendaPage,
    InscriçõesPage,
    AtualizePage,
    ContatoPage,
    OrganizacoesPage,
    NoticiaPage,
    AboutPage,
    ComprovantePPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider
  ]
})
export class AppModule {}
