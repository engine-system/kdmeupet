import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaPerdidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-perdidos',
  templateUrl: 'lista-perdidos.html',
})
export class ListaPerdidosPage {

  public pets:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pets = new Array();
   
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie2.jpg",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie2.jpg",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie2.jpg",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie2.jpg",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie2.jpg",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie2.jpg",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    this.pets.push({foto:"assets/imgs/border-collie.png",nome:"Lula",situacao:"preso",raca:"Border Collie"});
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPerdidosPage');
  }

}
