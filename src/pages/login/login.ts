import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';
import { AuthService } from '../../providers/servico/auth-service';

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
              private alertCtrl: AlertController,private loadingCtrl: LoadingController) {

    this.servico.login({
      username: 'johhny',
      password: '123'

    })
      .subscribe(
        res => console.log(res.json()),
        error => console.log(error)
      );
  }
  getDadosProprietario() {
    this.servico.getDadosProprietario({ id: '39159' })
      .subscribe(
        res => console.log("RESPOSTA PROPRIETARIO:", res),
        error => console.log("ERRO PROPRIETARIO", error)
      );
      console.log("consultou.....");
  }


  public loginLince() {

    this.showLoading()

    this.auth.loginLince(this.registerCredentials).subscribe(allowed => {
      console.log("teste"+this.registerCredentials);
      if (allowed) {
        this.getDadosProprietario();
        this.navCtrl.setRoot('HomePage');
      } else {
        this.showError("Acesso negado");
      }
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


