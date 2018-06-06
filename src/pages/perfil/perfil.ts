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
    this.carregaPerfil()
  }

  public carregaPerfil(){
      this.perfilProvider.getPerfil().then(data=>{
        console.log("aqui");
        console.log(data);
        if(data){
          this.user.nome = data['nome'];
        this.user.endereco = data['endereco'];
        this.user.telefone = data['telefone'];
        }else{
          this.user.nome="";
          this.user.endereco="";
          this.user.telefone="";
          this.navCtrl.push(PerfilPage);
        }
      })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  save(){
    this.perfilProvider.savePerfil(this.user)
  }

}
