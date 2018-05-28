import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPet_4Page } from '../cadastro-pet-4/cadastro-pet-4';
import { TabsPage } from '../tabs/tabs';
import { CadastropetProvider } from '../../providers/cadastropet/cadastropet-provider';
import { UtilProvider } from '../../providers/util/util';

/**
 * Generated class for the CadastroPet_5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-pet-5',
  templateUrl: 'cadastro-pet-5.html',
})
export class CadastroPet_5Page {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cadastro: CadastropetProvider,
    public util: UtilProvider) {
  }

  ionViewDidLoad() {
    console.log(this.cadastro);
    console.log('ionViewDidLoad CadastroPet_5Page');
  }

  public anterior() {
    this.navCtrl.push(CadastroPet_4Page);
  }
  public concluir() {
    this.cadastro.save(this.cadastro)
      .then(() => {
        this.util.createMessage('criado com sucesso');
        this.navCtrl.push(TabsPage);
      })
      .catch((e) => {
        console.log(e);
        this.util.createMessage('Ocorreu um erro');
      });

  }
}
