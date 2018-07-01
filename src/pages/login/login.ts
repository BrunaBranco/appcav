import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';
import { AuthService } from '../../providers/servico/auth-service';

import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  proprietario: any = {};
  login: any;

  loading: Loading;
  registerCredentials = { ficha: '', cpf: '' };


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private servico: ServicoProvider, private auth: AuthService,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController, private storage: Storage) {

    // this.servico.login({
    //   username: 'johhny',
    //   password: '123'

    // })
    //   .subscribe(
    //     res => console.log(res.json()),
    //     error => console.log(error)
    //   );
  }

  getDadosProprietario() {
    this.servico.getDadosProprietario(this.registerCredentials)
      .subscribe(

        // res => console.log("RESPOSTA PROPRIETARIO:", res),
        // error => console.log("ERRO PROPRIETARIO", error),
       res => this.storage.set('cliente',res.json())
      );
    console.log("consultou.....");
  }


  public loginLince() {

    this.showLoading()

    this.auth.loginL(this.registerCredentials).subscribe(allowed => {

      this.navCtrl.setRoot(HomePage);
      // if (allowed) {
      //   console.log("wqeqeqweqr232423434");

      // } else {
      //   this.showError("Acesso negado");
      // }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
  }

}

