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


  constructor(public navCtrl: NavController, public navParams: NavParams, private pegarCliente: ServicoProvider) {
    this.caneta = navParams.get('caneta');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

  buscarCliente(event) {
    this.pegarCliente.testeConexao(event.target.addEventListener).subscribe(
      data => {
        this.caneta = data.results;
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => console.log('teste')
    );
  }

}