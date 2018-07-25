import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ServicoProvider } from './servico';

export class User {
  cpf: string;
  ficha: string;

  constructor(cpf: string, ficha: string) {
    this.cpf = cpf;
    this.ficha = ficha;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  /**
   *
   */
  constructor(public storage: Storage, public servico: ServicoProvider) {


  }

  public loginL(credenciais) {
    if (credenciais.cpf === null || credenciais.ficha === null) {
      return Observable.throw("por favor insira suas credenciais");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = true;
        // let access = (credenciais.ficha === "ficha" && credenciais.cpf === "cpf");
        this.currentUser = new User(credenciais.cpf, credenciais.ficha);

        this.servico.getDadosProprietario(credenciais)
          .subscribe(res => this.storage.set('cliente', res.json()))

        observer.next(access);
        observer.complete();
      });
    }
  }

  public trocarSenha(trocarSenha) {
    if (trocarSenha.cpf === null || trocarSenha.ficha === null) {
      return Observable.throw("Por favor insera seus dados");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }


  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
