import { ServicoProvider } from './../../providers/servico/servico';
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
    // this.servico.login({
    //   username: 'johhny',
    //   password: '123'
    // })
    //   .subscribe(
    //     res => console.log(res.json()),
    //     error => console.log(error)
    //   );
    let info = this.auth.getUserInfo();
    this.cpf = info['cpf'];
    this.ficha = info['ficha'];
  }

  // getDadosProprietario() {
  //   this.servico.getDadosProprietario({ id: '39159' })
  //     .subscribe(
  //       res => console.log("RESPOSTA PROPRIETARIO:", res),
  //       error => console.log("ERRO PROPRIETARIO", error)
  //     );
  // }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

}
