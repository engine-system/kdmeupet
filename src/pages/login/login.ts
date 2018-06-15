import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';
import { ConfiguracoesProvider } from '../../providers/configuracoes/configuracoes';
import { AuthService } from '../../providers/auth/auth-service';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { HomePage } from '../home/home';
import { UtilProvider } from '../../providers/util/util';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario:User = new User();
  @ViewChild('form') form :NgForm;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public util:UtilProvider,
    public user:User,
    private configuracoes:ConfiguracoesProvider,
  private authService:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  public logar(){
    if(this.form.form.valid){
      this.authService.logar(this.usuario)
      .then((data)=>{
        this.user.key = data.user.uid
        this.navCtrl.setRoot(TabsPage);
      })
      .catch((error:any)=>{
        this.util.createMessage("usuario ou senha não cadastrados");
      })
    }
  }
  public cadastrar(){
    this.navCtrl.push(CadastroPage)
  }
}
