import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation'
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { ListaPerdidosPage } from '../pages/lista-perdidos/lista-perdidos';
import { ListaEncontradosPage } from '../pages/lista-encontrados/lista-encontrados';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { ResumoPage } from '../pages/resumo/resumo';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastroPetPage } from '../pages/cadastro-pet/cadastro-pet';
import { CadastroPerdidoPage } from '../pages/cadastro-perdido/cadastro-perdido';
import { CadastroPet_2Page } from '../pages/cadastro-pet-2/cadastro-pet-2';
import { CadastroPet_3Page } from '../pages/cadastro-pet-3/cadastro-pet-3';
import { CadastroPet_4Page } from '../pages/cadastro-pet-4/cadastro-pet-4';
import { CadastroPet_5Page } from '../pages/cadastro-pet-5/cadastro-pet-5';
import { CadastropetProvider } from '../providers/cadastropet/cadastropet-provider';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    MensagensPage,
    ListaPerdidosPage,
    ListaEncontradosPage,
    LoginPage,
    PerfilPage,
    ResumoPage,
    CadastroPage,
    CadastroPerdidoPage,
    CadastroPetPage,
    CadastroPet_2Page,
    CadastroPet_3Page,
    CadastroPet_4Page,
    CadastroPet_5Page,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    MensagensPage,
    ListaPerdidosPage,
    ListaEncontradosPage,
    LoginPage,
    PerfilPage,
    ResumoPage,
    CadastroPage,
    CadastroPerdidoPage,
    CadastroPetPage,
    CadastroPet_2Page,
    CadastroPet_3Page,
    CadastroPet_4Page,
    CadastroPet_5Page,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    HttpClientModule,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CadastropetProvider
  ]
})
export class AppModule {}
