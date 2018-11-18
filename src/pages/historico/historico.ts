import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';
import { Storage } from '@ionic/storage';
import { HistoricosPage } from '../historicos/historicos';

/**
 * Generated class for the HistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {
  pacientes = [];

  atendimento: any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public service: ServicoProvider) {

    storage.get('cliente').then(val => {
      service.getDadosPaciente(val).subscribe(res => {
        this.pacientes = res.json();
      });
    });
  }

  public historico(id: any) {
    this.navCtrl.push(HistoricosPage, {
      id: id



     });
  }

}
