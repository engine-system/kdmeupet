import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../auth/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class PerfilProvider {

  private PATHPERFIL = 'perfis/';
  constructor(public http: HttpClient,
    public user: User,
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase) {
    this.user = new User();
    console.log('Hello PerfilProvider Provider');
  }

  getPerfil() {
    return new Promise((resolve,reject)=>{
      const authObserver = this.afAuth.authState.subscribe(user => {
        let ref =  this.db.database.ref(this.PATHPERFIL+`/${user.uid}`);
        ref.on('value',function(snapshot){
          authObserver.unsubscribe();
          resolve(snapshot.val())
        })
      })
    })
  }
  /* 
  getPerfil(key: string) {
    return new Promise((resolve, reject) => {
      let ref = this.db.database.ref(this.PATHPERFIL);

      ref.orderByChild("userKey").equalTo(key).on("child_added", function (snapshot) {
        resolve({
          'key': snapshot.key,
          'val': snapshot.val()
        });
      });

    })

  }*/
  savePerfil(perfil: any) {
    const authObserver = this.afAuth.authState.subscribe(user => {
      this.db.object(this.PATHPERFIL+`/${user.uid}`).set(perfil)
      .then(()=>{
        authObserver.unsubscribe();
        console.log("deu certo")
      })
    })
  }
}
