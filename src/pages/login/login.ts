import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private servico: ServicoProvider) {
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

}
