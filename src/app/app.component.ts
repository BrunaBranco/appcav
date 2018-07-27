import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import {HistoricoPage} from '../pages/historico/historico';

import { ClientePage } from '../pages/cliente/cliente';
import { HomePage } from '../pages/home/home';
import { FinanceiroPage } from '../pages/financeiro/financeiro';
import { AtendimentoPage } from '../pages/atendimento/atendimento';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dados do Cliente', component: ClientePage },
      // { title: 'Dados do Paciente', component: PacientePage },
      { title: 'Dados Financeiro', component: FinanceiroPage },
      { title: ' Acompanhar atendimento', component: AtendimentoPage },
      {title: 'Historico', component: HistoricoPage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  volta() {
    this.nav.setRoot(HomePage);
  }
}
