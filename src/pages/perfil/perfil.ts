import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { Perfil } from '../../model/perfil';
import { User } from '../../providers/auth/user';
import { UtilProvider } from '../../providers/util/util';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  
  public user:Perfil = new Perfil();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public perfilProvider:PerfilProvider,
    public util:UtilProvider,
  public userProvider:User) {
    this.perfilProvider.getPerfil(this.userProvider.logado)
    .then(data=>{
      if(data){
        this.user.key = data['key'];
      this.user.nome = data['val']['nome'];
      console.log(data)
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  save(){
    this.perfilProvider.savePerfil(this.user)
    .then(data=>{
      this.util.createMessage("Seu perfil foi atualizado com sucesso");
      this.navCtrl.pop();
    })
    .catch(error=>{
      console.log(error);
    })
  }

}
