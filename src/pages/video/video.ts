import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdMobFreeRewardVideoConfig, AdMobFree } from '@ionic-native/admob-free';
import { UtilProvider } from '../../providers/util/util';
import { RecompensaPage } from '../recompensa/recompensa';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private admobFree: AdMobFree,
    public util:UtilProvider) {
  }

  ionViewDidLoad() {
    this.showVideoRewardsAd();
    console.log('ionViewDidLoad VideoPage');
  }

  async showVideoRewardsAd(){
    try{
      const videoRewardsConfig:AdMobFreeRewardVideoConfig={
        id:"ca-app-pub-3687864026368839/8536796968",
        isTesting:false,
        autoShow:true
      }
      this.admobFree.rewardVideo.config(videoRewardsConfig);
      const result = await this.admobFree.rewardVideo.prepare().then((data:any)=>{
        this.admobFree.rewardVideo.show();
        this.navCtrl.push(RecompensaPage)
      })
    }catch(e){
      console.log(e);
    }
  }

}
