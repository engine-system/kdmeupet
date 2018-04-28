import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CadastroPet_2Page } from '../cadastro-pet-2/cadastro-pet-2';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the CadastroPetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-pet',
  templateUrl: 'cadastro-pet.html',
})
export class CadastroPetPage {
  public fotoDoPet: any = "opa funciona sim!";
  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPetPage');
  }
  public enviarFoto() {

  }
  public proximo(){
    
    
    this.navCtrl.push(CadastroPet_2Page,{
      cadastro1:this.fotoDoPet
    });
  }
  public cancelar(){
    this.navCtrl.push(TabsPage)
  }
}
