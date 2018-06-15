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


  constructor(public navCtrl: NavController, public navParams: NavParams, private _pegarCliente: ServicoProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

  buscarCliente():void {
    this._pegarCliente.getCliente(this.cliente.cpf)
        .subscribe((data: Cliente) => this.cliente = data,
        error => console.log(error));
  }

}
