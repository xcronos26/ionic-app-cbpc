import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CfoPage } from './cfo';

@NgModule({
  declarations: [
    CfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CfoPage),
  ],
})
export class CfoPageModule {}
