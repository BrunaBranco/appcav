import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Cliente } from '../../cliente';
import { ServicoProvider } from '../../providers/servico/servico';

/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');

  }

  
  getDadosProprietario() {
    this.servico.getDadosProprietario({ id: '39159' })
      .subscribe(
        res => console.log("RESPOSTA PROPRIETARIO:", res),
        error => console.log("ERRO PROPRIETARIO", error)
      );
  }



}
