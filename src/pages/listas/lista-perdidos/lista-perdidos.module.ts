import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPerdidosPage } from './lista-perdidos';

@NgModule({
  declarations: [
    ListaPerdidosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPerdidosPage),
  ],
})
export class ListaPerdidosPageModule {}
