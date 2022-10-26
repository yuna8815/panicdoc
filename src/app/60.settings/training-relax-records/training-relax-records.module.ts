import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TrainingRelaxRecordsPageRoutingModule } from './training-relax-records-routing.module';
import { TrainingRelaxRecordsPage } from './training-relax-records.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingRelaxRecordsPageRoutingModule,
    SharedModule
  ],
  declarations: [TrainingRelaxRecordsPage]
})
export class TrainingRelaxRecordsPageModule {}
