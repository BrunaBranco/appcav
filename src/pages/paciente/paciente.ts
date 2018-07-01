import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    storage.get('paciente').then((val) => {
      this.paciente = val;
      console.log('paciente', val);
    });

  }



}
