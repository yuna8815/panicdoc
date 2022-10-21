import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { PatientQuestionPageRoutingModule } from './patient-question-routing.module';

import { PatientQuestionPage } from './patient-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PatientQuestionPageRoutingModule
  ],
  declarations: [PatientQuestionPage]
})
export class PatientQuestionPageModule {}
