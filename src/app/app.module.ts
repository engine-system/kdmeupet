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
import { AngularFireModule, FirebaseNameOrConfigToken } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
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
import { CadastroPet_2Page } from '../pages/cadastro-pet-2/cadastro-pet-2';
import { CadastroPet_3Page } from '../pages/cadastro-pet-3/cadastro-pet-3';
import { CadastroPet_4Page } from '../pages/cadastro-pet-4/cadastro-pet-4';
import { CadastroPet_5Page } from '../pages/cadastro-pet-5/cadastro-pet-5';
import { AdMobFree } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ConfiguracoesProvider } from '../providers/configuracoes/configuracoes';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { UtilProvider } from '../providers/util/util';
import { AuthService } from '../providers/auth/auth-service';
import { CabecalhoPage } from '../pages/cabecalho/cabecalho';
import { PopoverPage } from '../pages/popover/popover';
import { User } from '../providers/auth/user';
import { PetProvider } from '../providers/pet/pet-provider';
/*PRODUÇÃO */
const firebaseConfig={
  apiKey: "AIzaSyBtRvYg194vF2tbLPS0xnncPisCJlQUFDo",
  authDomain: "kdmeupet-1525023112929.firebaseapp.com",
  databaseURL: "https://kdmeupet-1525023112929.firebaseio.com",
  projectId: "kdmeupet-1525023112929",
  storageBucket: "kdmeupet-1525023112929.appspot.com",
  messagingSenderId: "242891791875"
}
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
    CadastroPetPage,
    CadastroPet_2Page,
    CadastroPet_3Page,
    CadastroPet_4Page,
    CadastroPet_5Page,
    CabecalhoPage,
    HomePage,
    TabsPage,
    PopoverPage,
    EditarPerfilPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    CadastroPetPage,
    CadastroPet_2Page,
    CadastroPet_3Page,
    CadastroPet_4Page,
    CadastroPet_5Page,
    CabecalhoPage,
    HomePage,
    TabsPage,
    PopoverPage,
    EditarPerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    HttpClientModule,
    AdMobFree,
    SocialSharing,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PetProvider,
    ConfiguracoesProvider,
    UtilProvider,
    User,
    AuthService
  ]
})
export class AppModule {}


