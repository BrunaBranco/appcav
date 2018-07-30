import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/servico/auth-service';
import { LoginPage } from '../login/login';
import { ServicoProvider } from '../../providers/servico/servico';
import { Storage } from '@ionic/storage';
import { PacientePage } from '../paciente/paciente';
import { HistoricoPage } from '../historico/historico';



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
  atendimento: any = {};


  constructor(public navCtrl: NavController, private auth: AuthService, private storage: Storage, public service: ServicoProvider, public navParams: NavParams) {
    let info = this.auth.getUserInfo();
    this.cpf = info['cpf'];
    this.senha = info['senha'];
    let idAtendimento = navParams.get("id");

    storage.get('cliente').then(val => {
      service.getDadosPaciente(val).subscribe(res => {
        this.pacientes = res.json();

      });

    });

    // service.getAtendimento(idAtendimento).subscribe(res => {
    //   this.atendimento = res.json();
    // });

  }


  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

  public trocarSenha() {
    this.navCtrl.push('trocar-senhar');
  }

  public selecionarAnimal(id: any) {
    this.navCtrl.push(PacientePage, {
      id: id

    });
  }

}
