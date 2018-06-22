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

  pet: string = "puppies";

  cliente: Cliente;
  caneta: {};
  countries: any;
  rest: any;
  errorMessage: any;
  servico: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private pegarCliente: ServicoProvider) {
    this.caneta = navParams.get('caneta');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

  buscarCliente() {
    this.pegarCliente.getProprietario('123')
      .subscribe(res => {
        this.cliente = res.json() as Cliente;
      });
  }
}
