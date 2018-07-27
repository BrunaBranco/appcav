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

    this.paciente = navParams.get("id");  
    service.getPaciente(this.paciente);
    console.log(this.paciente);
  }
}
