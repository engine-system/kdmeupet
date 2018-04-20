import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ListaPerdidosPage } from '../lista-perdidos/lista-perdidos';
import { ListaEncontradosPage } from '../lista-encontrados/lista-encontrados';
import { MensagensPage } from '../mensagens/mensagens';
import { ResumoPage } from '../resumo/resumo';

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
