import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaEncontradosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-encontrados',
  templateUrl: 'lista-encontrados.html',
})
export class ListaEncontradosPage {
  
  public pets:any;
  public pets2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pets = new Array();
    this.pets2 = new Array();
    
    this.pets2.push({});
    this.pets2.push({});
    this.pets2.push({});
    
    this.pets.push({});
    this.pets.push({});
    this.pets.push({});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEncontradosPage');
  }

}
