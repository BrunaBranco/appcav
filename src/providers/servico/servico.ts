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
  servico: any;


  constructor(private http: Http) {

  }

  // faz login no sistema e carrega os dados da sessão
  login(user: any): Observable<Response> {
    let url = 'http://modelos.4pix.com.br/cav/SessaoAPI/login';
    return this.http.post(url, user);
  }

  // atraves do login retorna os dados do proprietario do animal
  getDadosProprietario(login: any): Observable<Response> {
    let url = 'http://modelos.4pix.com.br/cav/AppAPI/proprietario/' + login.cpf + "/" + login.senha;
    return this.http.get(url);
  }
  getDadosPaciente(proprietario: any) {
    let url = 'http://modelos.4pix.com.br/cav/AppAPI/pacientes/' + proprietario.id;
    return this.http.get(url);
  }

  getPaciente(idPaciente: any) {
    let url = 'http://modelos.4pix.com.br/cav/AppAPI/paciente/' + idPaciente;
    console.log("id Lady: ", idPaciente);
    return this.http.get(url);
  }

  getAtendimento(idPaciente: any) {
    let url = 'http://modelos.4pix.com.br/cav/AppAPI/atendimentos/' + idPaciente;
    return this.http.get(url);
  }

  // getAtendimentoAtual(idPaciente: any) {
  //   let url = 'http://modelos.4pix.com.br/cav/AppAPI/atendimentos/' + idPaciente;
  //   return this.http.get(url);
  // }

  getFinanceiro(idAgendamento) {
    let url = 'http://modelos.4pix.com.br/cav/AppAPI/financeiro/' + idAgendamento;
    console.log("Agendamento ID no financeiro: ", idAgendamento);
    return this.http.get(url);
  }
  getHistorico(id_Agendamento) {
    let url = 'http://modelos.4pix.com.br/cav/AppAPI/historico/' + id_Agendamento;
    console.log("Agendamento ID: ", id_Agendamento);
    return this.http.get(url);
  }
  getRequisicao(id_Agendamento) {
    let url = 'http://modelos.4pix.com.br/cav/AppAPI/requisicao/' + id_Agendamento;
    console.log("id Requisicao: ", id_Agendamento);
    return this.http.get(url);
  }


  // buscarCliente() {
  //   this.servico.login({
  //     username: 'johhny',
  //     password: '123'
  //   })
  //     .subscribe(
  //       res => console.log(res),
  //       error => console.log(error)
  //     );
  //   this.servico.getDadosProprietario({ id: '39159' })
  //     .subscribe(
  //       res => console.log("RESPOSTA PROPRIETARIO:", res),
  //       error => console.log(error)
  //     );

  // }

}
