import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Pet } from '../../model/pet';
import { UtilProvider } from '../../providers/util/util';
import { CadastroPet_5Page } from '../cadastro-pet-5/cadastro-pet-5';
import { CadastroPet_3Page } from '../cadastro-pet-3/cadastro-pet-3';



declare var google: any;
@IonicPage()
@Component({
  selector: 'page-map-individual',
  templateUrl: 'map-individual.html',
})
export class MapIndividualPage {
  lat: any;
  lgt: any;
  public endereco: string = '';
  public pet:Pet;
  public acao:any;
  @ViewChild('map') mapRef: ElementRef;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geo: Geolocation,
    public util: UtilProvider
  ) {

  }
  showMap() {
    const location = new google.maps.LatLng(this.lat, this.lgt);
    const options = {
      center: location,
      zoom: 20,
      streetViewControl: false,
    }
    const map = new google.maps.Map(this.mapRef.nativeElement,
      options);

    this.addMarker(location, map);
    this.getEndereco();
  }
  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    })
  }
  getEndereco() {
    let endereco = {
      'lat':this.lat,
      'lgt':this.lgt
    }
    this.util.getEnderecoLatLong(endereco)
      .then((data: any) => {
        this.endereco = data.results[0].formatted_address;
      })
      .catch(error => {
        console.log(error);
      })
  }

  ionViewDidLoad() {


    this.geo.getCurrentPosition().then(pos => {

      this.lat = pos.coords.latitude;
      this.lgt = pos.coords.longitude;

      this.showMap();
    })
  }

}

