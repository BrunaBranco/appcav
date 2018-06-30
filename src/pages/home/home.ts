import { ServicoProvider } from './../../providers/servico/servico';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  proprietario: any = {};
  login:any;

  constructor(public navCtrl: NavController, public servico: ServicoProvider) {
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
  }
}
