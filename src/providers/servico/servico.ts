import { Injectable } from '@angular/core';


import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../providers/servico/auth-service';


/*
  Generated class for the ServicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicoProvider {
  servico:any;


  constructor(private http: Http, private auth: AuthService) {

  }


  login(user: any): Observable<Response> {
    let url = 'http://modelos.4pix.com.br/cav/SessaoAPI/login';
    return this.http.post(url, user);
  }

  getDadosProprietario(login: any): Observable<Response> {
    let url = 'http://modelos.4pix.com.br/cav/AppAPI/proprietario/' + login.cpf + "/" + login.ficha;
    return this.http.get(url);
  }



  buscarCliente() {
    this.servico.login({
      username: 'johhny',
      password: '123'
    })
      .subscribe(
        res => console.log(res),
        error => console.log(error)
      );
    this.servico.getDadosProprietario({ id: '39159' })
      .subscribe(
        res => console.log("RESPOSTA PROPRIETARIO:", res),
        error => console.log(error)
      );

  }

}
