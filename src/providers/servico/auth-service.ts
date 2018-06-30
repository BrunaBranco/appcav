import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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

  public loginLince(credenciais) {
    if (credenciais.cpf === null || credenciais.ficha === null) {
      return Observable.throw("por favor insira suas credenciais");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credenciais.ficha === "ficha" && credenciais.cpf === "cpf");
        this.currentUser = new User('72040', '07108416980');
        observer.next(access);
        observer.complete();
      });
    }
  }


  public getUserInfo() : User {
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
