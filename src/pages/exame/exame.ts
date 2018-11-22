import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ExamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exame',
  templateUrl: 'exame.html',
})
export class ExamePage {
  requisicao=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private storage: Storage, public service: ServicoProvider) {


    let id_Agendamento = navParams.get("id");
    console.log("agendamento:", id_Agendamento);

    service.getRequisicao(id_Agendamento).subscribe(res => {
      this.requisicao = res.json();
      console.log("requisição concluida: ", this.requisicao);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamePage');
  }

}
