import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { PdssQuestionnaireStep1PageRoutingModule } from './pdss-questionnaire-step1-routing.module';

import { PdssQuestionnaireStep1Page } from './pdss-questionnaire-step1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireStep1PageRoutingModule,
  ],
  declarations: [PdssQuestionnaireStep1Page]
})
export class PdssQuestionnaireStep1PageModule {}
