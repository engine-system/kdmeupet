import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth/auth-service';
import { CadastroPet_4Page } from '../cadastro-pet-4/cadastro-pet-4';


@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  sair() {
    this.authService.logOut();
    this.navCtrl.push(LoginPage);

  }

}
