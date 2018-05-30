import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../auth/user';

@Injectable()
export class PerfilProvider {

  private PATHPERFIL = 'perfis/';
  constructor(public http: HttpClient,
    private userProvider:User,
    private db: AngularFireDatabase) {
    console.log('Hello PerfilProvider Provider');
  }


  getPerfil(key:string) {
    return new Promise((resolve, reject) => {
      let ref = this.db.database.ref(this.PATHPERFIL);
      
    ref.orderByChild("userKey").equalTo(key).on("child_added", function(snapshot) {
      resolve({
        'key':snapshot.key,
        'val':snapshot.val()
      });
    });
      
    })
    
  }

  savePerfil(user: any) {

    console.log(user);
    return new Promise((resolve, reject) => {
      if(user.key){
        this.db.list(this.PATHPERFIL)
        .update(user.key, {
          nome: user.nome,
        })
        .then(() => resolve())
        .catch((e) => reject(e));
      }else{
        this.db.list(this.PATHPERFIL)
        .push({
          userKey: this.userProvider.logado,
          nome: user.nome
        })
        .then(() => resolve());
      }
    })

  }

}
