import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { PdssQuestionnaireStep2PageRoutingModule } from './pdss-questionnaire-step2-routing.module';

import { PdssQuestionnaireStep2Page } from './pdss-questionnaire-step2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireStep2PageRoutingModule
  ],
  declarations: [PdssQuestionnaireStep2Page]
})
export class PdssQuestionnaireStep2PageModule {}
