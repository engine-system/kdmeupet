import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEncontradosPage } from './lista-encontrados';

@NgModule({
  declarations: [
    ListaEncontradosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEncontradosPage),
  ],
})
export class ListaEncontradosPageModule {}
