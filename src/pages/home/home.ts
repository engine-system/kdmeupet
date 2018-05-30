import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPetPage } from '../cadastro-pet/cadastro-pet';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CadastroPage } from '../cadastro/cadastro';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';
import { PetProvider } from '../../providers/pet/pet-provider';
import { Pet } from '../../model/pet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cadastrados: string='contando...';
  public perdidos: string='contando...';
  public mensagens: number;
  message: string = null;
  file: string = null;
  link: string = null;
  subject: string = null;

  constructor(public navCtrl: NavController,
    public petProvider: PetProvider,
    private admobFree: AdMobFree,
    private socialSharing: SocialSharing) {
    this.contagem();
    this.mensagens = 56;
    this.showBannerAd();
  }
  public contagem(){
    
    this.petProvider.getAllAchados().then(data => {
      let pets
      pets = data;
      this.cadastrados = pets.length;
    })
    this.petProvider.getAllPerdidos().then(data => {
      let pets
      pets = data;
      this.perdidos = pets.length;
    })
  }
  public meuPerfil() {
    this.navCtrl.push(EditarPerfilPage);
  }
  public perdiMeuPet() {
    let pet: Pet = new Pet();
    pet.zerar();
    this.navCtrl.push(CadastroPetPage, {
      'acao': 'perdido',
      'pet': pet
    })
  }
  public acheiUmPet() {
    let pet: Pet = new Pet();
    pet.zerar();
    this.navCtrl.push(CadastroPetPage, {
      'acao': 'achado',
      'pet': pet
    })
  }
  share() {
    this.link = "http://google.com";
    this.subject = "compartilhar cachorro";
    this.socialSharing.share(this.message, this.subject, this.file, this.link)
      .then(() => {

      })
      .catch(() => {

      });
  }
  async showBannerAd() {
    try {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: 'ca-app-pub-3687864026368839/7892547753',
        isTesting: false,
        autoShow: true
      }
      this.admobFree.banner.config(bannerConfig);

      const result = await this.admobFree.banner.prepare();
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }

}
