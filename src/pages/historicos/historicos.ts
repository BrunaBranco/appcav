import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HistoricosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historicos',
  templateUrl: 'historicos.html',
})
export class HistoricosPage {
  historicos=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public service: ServicoProvider) {
    let id_Agendamento = navParams.get("id");
    console.log("agendamento:", id_Agendamento);

    service.getHistorico(id_Agendamento).subscribe(res => {
      this.historicos = res.json();
      console.log("historicoooo: ", this.historicos);
    });
  }



}
