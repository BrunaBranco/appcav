
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Cliente } from '../../cliente';

/*
  Generated class for the ServicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicoProvider {

  private _Url = 'http://modelos.4pix.com.br/cav/ProprietariosAPI/proprietario/10536';

  constructor(private _http: Http) {
    console.log('Hello ServicoProvider Provider');
  }


  //para pegar os dados do cliente
  getCliente(string: string): Observable<Cliente> {
    return this._http.get(this._Url)
        .map((response: Response) => <Cliente>response.json())
        .do(data => console.log('Todos: ' + JSON.stringify(data)))
        .catch(this.handleError);
}

private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}

}
