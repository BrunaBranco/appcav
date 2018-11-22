import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';

/**
 * Generated class for the FinanceiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-financeiro',
  templateUrl: 'financeiro.html',
})
export class FinanceiroPage {
  financeiros = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServicoProvider) {

    let idAgendamento = navParams.get("id");

    service.getFinanceiro(idAgendamento).subscribe(res => {
      this.financeiros = res.json();
      console.log("id fin", this.financeiros);
    });

  }


}
