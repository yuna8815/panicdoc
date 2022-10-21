import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { PdssQuestionnaireStep4PageRoutingModule } from './pdss-questionnaire-step4-routing.module';

import { PdssQuestionnaireStep4Page } from './pdss-questionnaire-step4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireStep4PageRoutingModule
  ],
  declarations: [PdssQuestionnaireStep4Page]
})
export class PdssQuestionnaireStep4PageModule {}
