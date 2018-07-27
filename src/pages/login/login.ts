import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';
import { AuthService } from '../../providers/servico/auth-service';

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
  registerCredentials = { senha: '', cpf: '' };


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private servico: ServicoProvider, private auth: AuthService,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController, private storage: Storage) {

      this.registerCredentials.senha = "0710";
      this.registerCredentials.cpf = "07108416980";
  }

  getDadosPaciente() {
    this.servico.getDadosPaciente(this.registerCredentials)
      .subscribe(res =>{          
          this.storage.set('paciente', res.json());
        });
  }

  // busca os dados de proprietario atraves das credencias
  getDadosProprietario() {
    this.servico.getDadosProprietario(this.registerCredentials)
      .subscribe(res => {        
        this.storage.set('cliente', res.json())
      });
  }

  // esse metodo faz a validação do login no sistema
  public loginLince() {
    this.showLoading();
    this.auth.loginL(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this.navCtrl.setRoot(HomePage);
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


