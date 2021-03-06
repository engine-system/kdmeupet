import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { CadastroPet_4Page } from '../pages/cadastro-pet-4/cadastro-pet-4';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { User } from '../providers/auth/user';
import { CadastroFinalizadoPage } from '../pages/cadastro-finalizado/cadastro-finalizado';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    afAuth: AngularFireAuth,
    public userProvider: User) {

    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        this.userProvider.key = user.uid;
        this.rootPage = TabsPage;
        
        authObserver.unsubscribe();
      } else {
        this.rootPage = LoginPage;
        authObserver.unsubscribe();
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.show();
      splashScreen.hide();

    });
  }
}
