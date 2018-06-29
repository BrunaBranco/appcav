import { Injectable } from '@angular/core';


import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the ServicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicoProvider {
  servico:any;


  constructor(private http: Http) {

  }



  // private extractData(res: Response) {
  //   let body = res;
  //   return body || { };
  // }

  // private handleError (error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const err = error || '';
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

  login(user: any): Observable<Response> {
    let url = 'http://modelos.4pix.com.br/cav/SessaoAPI/login';
    return this.http.post(url, user);
  }

  getDadosProprietario(proprietario: any): Observable<Response> {
    let url = 'http://modelos.4pix.com.br/cav/ProprietariosAPI/proprietario/' + proprietario.id;
    return this.http.get(url);
  }



  buscarCliente() {
    this.servico.getDadosProprietario({ id: '39159' })
      .subscribe(
        res => console.log("RESPOSTA PROPRIETARIO:", res),
        error => console.log(error)
      );
    this.servico.login({
      username: 'johhny',
      password: '123'
    })
      .subscribe(
        res => console.log(res),
        error => console.log(error)
      );
  }

}
