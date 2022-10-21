import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { PdssQuestionnaireStep6PageRoutingModule } from './pdss-questionnaire-step6-routing.module';

import { PdssQuestionnaireStep6Page } from './pdss-questionnaire-step6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireStep6PageRoutingModule
  ],
  declarations: [PdssQuestionnaireStep6Page]
})
export class PdssQuestionnaireStep6PageModule {}
