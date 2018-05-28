import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UtilProvider } from '../../providers/util/util';
import { AuthService } from '../../providers/auth/auth-service';
import { User } from '../../providers/auth/user';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  
  usuario: User = new User();

  @ViewChild('form') form:NgForm;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private authService: AuthService,
    private util:UtilProvider,
  ) {

    

    /*this.usuario = this.navParams.data.usuario || {};
    this.createForm(); */


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  createAccount(){
    if(this.form.valid){
      this.authService.createUser(this.usuario)
      .then((user:any)=>{
        this.util.createMessage('Usuario criado com sucesso, confirme seu e-mail');
        this.navCtrl.setRoot(LoginPage);
      })
      .catch((error:any)=>{
        if(error.code == 'auth/email-already-in-use'){
          this.util.createMessage('E-mail ou usuario já existente, tente com outro e-mail');
        }
        else if(error.code == 'auth/invalid-email'){
          this.util.createMessage('E-mail invalido');
        }
        else if(error.code == 'auth/operation-not-allowed'){
          this.util.createMessage('Ocorreu um erro! tente novamente mais tarde');
        }
        else if(error.code == 'auth/weak-password'){
          this.util.createMessage('Senha fraca');
        }
      })
    }
  }
  /*
    createForm() {
      this.form = this.formBuilder.group({
        key: [this.usuario.key],
        nome: [this.usuario.nome, Validators.required],
        email: [this.usuario.email, Validators.required]
      })
    }
    onSubmit() {
      if (this.form.valid) {
        this.usuarioProvider.save(this.form.value)
          .then(() => {
            this.toast.create({ message: 'criado com sucesso', duration: 3000 }).present();
            this.navCtrl.pop();
          })
          .catch((e) => {
            this.toast.create({ message: 'erro', duration: 3000 }).present();
          });
      }
    }*/

}
