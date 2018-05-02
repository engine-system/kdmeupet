import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPetPage } from '../cadastro-pet/cadastro-pet';
import { CadastroPerdidoPage } from '../cadastro-perdido/cadastro-perdido';
import { CadastropetProvider } from '../../providers/cadastropet/cadastropet-provider';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cadastrados: number;
  public perdidos: number;
  public mensagens: number;

  constructor(public navCtrl: NavController, public cadastroPetProvider: CadastropetProvider, private admobFree: AdMobFree) {
    this.cadastrados = 50;
    this.perdidos = 23;
    this.mensagens = 56;
    this.showBannerAd();
  }
  public perdiMeuPet() {
    this.cadastroPetProvider.zerar();
    this.navCtrl.push(CadastroPetPage)
  }
  public acheiUmPet() {
    this.navCtrl.push(CadastroPerdidoPage)
  }
  async showBannerAd(){
    try{
      const bannerConfig:AdMobFreeBannerConfig = {
        isTesting:true,
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
