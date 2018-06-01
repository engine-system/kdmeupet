import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirebaseApp } from 'angularfire2';
import { Platform } from 'ionic-angular';
/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  constructor(
    public http: HttpClient,
    public fireBaseNative: FirebaseApp,
    public afs: AngularFirestore,
    public platform: Platform) {
    console.log('Hello FcmProvider Provider');
  }

}
