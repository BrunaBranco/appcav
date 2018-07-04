import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/servico/auth-service';

/**
 * Generated class for the TrocarSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trocar-senha',
  templateUrl: 'trocar-senha.html',
})
export class TrocarSenhaPage {
  trocarSenha = false;
  registrar = { ficha: '', cpf: '' }

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController) {
  }

  public registrarSenha() {
    this.auth.trocarSenha(this.registrar).subscribe(success => {
      if (success) {
        this.trocarSenha = true;
        this.showPopup("Success", "Senha trocada");
      } else {
        this.showPopup("Error", "Ocorreu erro no trocar a senha");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.trocarSenha) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
