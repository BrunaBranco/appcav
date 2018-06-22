import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Http, Response } from '@angular/http';

/*
  Generated class for the ServicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicoProvider {


  constructor(private http:Http) {
    console.log('entra no contrutor');
  }

  // this.http.get(url).map(res => res.json());

//   testeConexao(teste) {
//     var url = 'http://modelos.4pix.com.br/cav/SessaoAPI/login';
//     console.log();
//     var response = this.http.get(url).map(res => res.json());
//     return response;
// }

getProprietario(id_proprietario: String): Observable<Response> {
  return this.http.get('http://modelos.4pix.com.br/cav/SessaoAPI/login');

}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }






}
