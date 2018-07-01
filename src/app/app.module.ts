import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PacientePage } from '../pages/paciente/paciente';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClientePage } from '../pages/cliente/cliente';
import { ServicoProvider } from '../providers/servico/servico';
import { HttpModule } from '@angular/http';
import { AuthService } from '../providers/servico/auth-service';
import { IonicStorageModule } from '@ionic/storage';
import { Cliente } from '../cliente';
import { FinanceiroPage } from '../pages/financeiro/financeiro';
import {AtendimentoPage} from '../pages/atendimento/atendimento';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientePage,
    LoginPage,
    PacientePage,
    FinanceiroPage,
    AtendimentoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientePage,
    LoginPage,
    PacientePage,
    FinanceiroPage,
    AtendimentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServicoProvider,
    HttpModule,
    AuthService,
    Cliente
  ]
})
export class AppModule { }
