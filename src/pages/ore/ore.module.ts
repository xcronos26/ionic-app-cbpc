import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrePage } from './ore';

@NgModule({
  declarations: [
    OrePage,
  ],
  imports: [
    IonicPageModule.forChild(OrePage),
  ],
})
export class OrePageModule {}
