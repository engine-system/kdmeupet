import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPet_4Page } from '../cadastro-pet-4/cadastro-pet-4';
import { TabsPage } from '../tabs/tabs';
import { UtilProvider } from '../../providers/util/util';
import { PetProvider } from '../../providers/pet/pet-provider';
import { Pet } from '../../model/pet';
import { CadastroFinalizadoPage } from '../cadastro-finalizado/cadastro-finalizado';

@Component({
  selector: 'page-cadastro-pet-5',
  templateUrl: 'cadastro-pet-5.html',
})
export class CadastroPet_5Page {
  public pet:Pet = new Pet();
  public acao:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public petProvider: PetProvider,
    public util: UtilProvider) {
      this.pet.zerar();
  }

  ionViewDidLoad() {
    this.pet = this.navParams.get('pet');
    this.acao = this.navParams.get('acao');
    console.log(this.pet);
    console.log('ionViewDidLoad CadastroPet_5Page');
  }

  public anterior() {
    this.navCtrl.push(CadastroPet_4Page);
  }
  public concluir() {

    if(this.acao=='achado'){
      this.petProvider.saveAchado(this.pet)
      .then(() => {
        this.navCtrl.push(CadastroFinalizadoPage);
      })
      .catch((e) => {
        console.log(e);
        this.util.createMessage('Ocorreu um erro');
      });
    }else{
      this.petProvider.savePerdido(this.pet)
      .then(() => {
        this.navCtrl.push(CadastroFinalizadoPage);
      })
      .catch((e) => {
        console.log(e);
        this.util.createMessage('Ocorreu um erro');
      });
    }

  }
}
