
import { Injectable } from '@angular/core';

// import { Http, Response } from '@angular/http';
import {Http} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Cliente } from '../../cliente';

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

  testeConexao(teste) {


    var response = this.http.get('http://modelos.4pix.com.br/cav/SessaoAPI/login').map(res => res.json());
    console.log(response);
    return response;
}





}
