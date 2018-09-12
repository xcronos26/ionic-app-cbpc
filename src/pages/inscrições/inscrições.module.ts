import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InscriçõesPage } from './inscrições';

@NgModule({
  declarations: [
    InscriçõesPage,
  ],
  imports: [
    IonicPageModule.forChild(InscriçõesPage),
  ],
})
export class InscriçõesPageModule {}
