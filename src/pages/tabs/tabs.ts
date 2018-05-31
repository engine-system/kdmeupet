import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MensagensPage } from '../mensagens/mensagens';
import { ListaPerdidosPage } from '../listas/lista-perdidos/lista-perdidos';
import { ListaEncontradosPage } from '../listas/lista-encontrados/lista-encontrados';
import { NosajudePage } from '../nosajude/nosajude';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListaPerdidosPage;
  tab3Root = ListaEncontradosPage;
  tab4Root = NosajudePage;

  constructor() {

  }
}
