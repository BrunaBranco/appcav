import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';
import { FinanceiroPage } from '../financeiro/financeiro';
import { HistoricosPage } from '../historicos/historicos';

/**
 * Generated class for the PacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paciente',
  templateUrl: 'paciente.html',
})
export class PacientePage {
  paciente: any = {};
  atendimento: any = {};
  status =[];

  pet: string = "animais";

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServicoProvider) {
    let idPaciente = navParams.get("id");
    let idAtendimento = navParams.get("id");


    service.getPaciente(idPaciente).subscribe(res => {
      this.paciente = res.json();
      console.log("id paciente: ", this.paciente);
    });

    service.getAtendimento(idAtendimento).subscribe(res => {
      this.atendimento = res.json();
    });

    // service.getStatus(idPaciente).subscribe(res =>{
    //   this.status = res.json();
    // });
  }

  public financeiro(id: any) {
    this.navCtrl.push(FinanceiroPage, {
      id: id
    });
  }


  public historico(id: any) {
    this.navCtrl.push(HistoricosPage, {
      id: id
    });
  }
}
