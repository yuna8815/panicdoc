import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { PdssQuestionnaireStep3PageRoutingModule } from './pdss-questionnaire-step3-routing.module';

import { PdssQuestionnaireStep3Page } from './pdss-questionnaire-step3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireStep3PageRoutingModule
  ],
  declarations: [PdssQuestionnaireStep3Page]
})
export class PdssQuestionnaireStep3PageModule {}
