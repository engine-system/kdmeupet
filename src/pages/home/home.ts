import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPetPage } from '../cadastro-pet/cadastro-pet';
import { CadastroPerdidoPage } from '../cadastro-perdido/cadastro-perdido';
import { CadastropetProvider } from '../../providers/cadastropet/cadastropet-provider';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CadastroPage } from '../cadastro/cadastro';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cadastrados: number;
  public perdidos: number;
  public mensagens: number;
  message:string = null;
  file:string = null;
  link:string = null;
  subject:string = null;

  constructor(public navCtrl: NavController,
    public cadastroPetProvider: CadastropetProvider,
    private admobFree: AdMobFree,
    private socialSharing: SocialSharing) {
    this.cadastrados = 50;
    this.perdidos = 23;
    this.mensagens = 56;
    this.showBannerAd();
  }
  public meuPerfil(){
    this.navCtrl.push(EditarPerfilPage);
  }
  public perdiMeuPet() {
    this.cadastroPetProvider.zerar();
    this.navCtrl.push(CadastroPetPage)
  }
  public acheiUmPet() {
    this.navCtrl.push(CadastroPerdidoPage)
  }
  share(){
    this.link = "http://google.com";
    this.subject = "compartilhar cachorro";
    this.socialSharing.share(this.message,this.subject,this.file,this.link)
    .then(()=>{

    })
    .catch(()=>{

    });
  }
  async showBannerAd(){
    try{
      const bannerConfig:AdMobFreeBannerConfig = {
        id:'ca-app-pub-3687864026368839/7892547753',
        isTesting:false,
        autoShow:true
      }
      this.admobFree.banner.config(bannerConfig);

      const result = await this.admobFree.banner.prepare();
      console.log(result);
    }catch(e){
      console.error(e);
    }
  }

}
