import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';

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

  pet: string = "animais";

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServicoProvider) {
    let idPaciente = navParams.get("id");
    console.log(idPaciente);

    service.getPaciente(idPaciente).subscribe(res => {
      this.paciente = res.json();      
    console.log("paciente: ", this.paciente);
    });
  }
}
