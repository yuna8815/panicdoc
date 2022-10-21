import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { PdssQuestionnaireStep5PageRoutingModule } from './pdss-questionnaire-step5-routing.module';

import { PdssQuestionnaireStep5Page } from './pdss-questionnaire-step5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireStep5PageRoutingModule
  ],
  declarations: [PdssQuestionnaireStep5Page]
})
export class PdssQuestionnaireStep5PageModule {}
