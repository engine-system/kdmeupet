import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
  
  public cores;
  public portes;
  public idades;
  public racas;

  public fotoDoPet: any;
  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
    this.cores = [
      {
        codigo: '01',
        nome: 'Preto'
      },
      {
        codigo: '02',
        nome: 'Branco'
      }
    ];
    this.portes = [
      {
        codigo:'01',
        nome:'Pequeno'
      },
      {
        codigo:'02',
        nome:'Médio'
      }
    ];
    this.idades = [
      {
        codigo:'01',
        nome:'Filhote'
      },
      {
        codigo:'02',
        nome:'Adulto'
      }
    ];
    this.racas = [
      {
        codigo:'01',
        nome:'Vira-Lata'
      },
      {
        codigo:'02',
        nome:'Border Collie'
      }
    ]
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPetPage');
  }
  public enviarFoto() {

  }
}
