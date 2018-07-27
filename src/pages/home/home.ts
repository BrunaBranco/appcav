import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/servico/auth-service';
import { LoginPage } from '../login/login';
import { ServicoProvider } from '../../providers/servico/servico';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  proprietario: any = {};
  login: any;
  cpf = '';
  senha = '';
  pacientes = [];

  constructor(public navCtrl: NavController, private auth: AuthService, private storage: Storage, public service: ServicoProvider) {
    let info = this.auth.getUserInfo();
    this.cpf = info['cpf'];
    this.senha = info['senha'];

    storage.get('cliente').then(val => {
      console.log("cliente", val);
      service.getDadosPaciente(val).subscribe(res => {
        this.pacientes = res.json();
        console.log('paciente', this.pacientes);
      });

    });
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
