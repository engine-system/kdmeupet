import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import { User } from './user';
import { NavController } from "ionic-angular";
import { LoginPage } from "../../pages/login/login";

@Injectable()
export class AuthService {

    user: Observable<firebase.User>;

    constructor(
        private angularFireAuth: AngularFireAuth) {
        this.user = angularFireAuth.authState;
    }

    createUser(user: User) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }

    logar(user: User) {
        user.email = user.email.toLowerCase();
        user.email = user.email.trim();
        console.log(user);
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }
    public logOut():boolean {
        let retorno:any;
        this.angularFireAuth.auth.signOut()
            .then(() => {
                console.log("sim ele desloga")
                retorno = true;
            })
            .catch((error: any) => {
                retorno = false;
                console.log(error)
            })

            return retorno;
    }
}