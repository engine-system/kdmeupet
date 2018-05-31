import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoacaoPage } from '../doacao/doacao';
import { VideoPage } from '../video/video';

/**
 * Generated class for the NosajudePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nosajude',
  templateUrl: 'nosajude.html',
})
export class NosajudePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NosajudePage');
  }

  doacao(){
    this.navCtrl.push(DoacaoPage);
  }
  video(){
    this.navCtrl.push(VideoPage);
  }

}
