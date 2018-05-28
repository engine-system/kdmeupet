import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CabecalhoPage } from './cabecalho';

@NgModule({
  declarations: [
    CabecalhoPage,
  ],
  imports: [
    IonicPageModule.forChild(CabecalhoPage),
  ],
})
export class CabecalhoPageModule {}
