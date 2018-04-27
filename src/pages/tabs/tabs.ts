import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListaPerdidosPage } from '../lista-perdidos/lista-perdidos';
import { ListaEncontradosPage } from '../lista-encontrados/lista-encontrados';
import { MensagensPage } from '../mensagens/mensagens';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListaPerdidosPage;
  tab3Root = ListaEncontradosPage;
  tab4Root = MensagensPage;

  constructor() {

  }
}
