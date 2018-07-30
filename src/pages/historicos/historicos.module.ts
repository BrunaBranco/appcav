import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricosPage } from './historicos';

@NgModule({
  declarations: [
    HistoricosPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricosPage),
  ],
})
export class HistoricosPageModule {}
