import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


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

  teste: any = {};
  pet: string = "puppies";

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    storage.get('cliente').then(val => {
      this.teste = val || {};
      console.log('cliente', val);
    });
  }

}
