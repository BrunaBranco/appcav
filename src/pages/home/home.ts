import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/servico/auth-service';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  proprietario: any = {};
  login:any;
  cpf = '';
  ficha = '';

  constructor(public navCtrl: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.cpf = info['cpf'];
    this.ficha = info['ficha'];
  }



  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

  public trocarSenha() {
    this.navCtrl.push('trocar-senhar');
  }

}
