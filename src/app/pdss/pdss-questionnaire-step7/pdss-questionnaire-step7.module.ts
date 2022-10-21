import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { PdssQuestionnaireStep7PageRoutingModule } from './pdss-questionnaire-step7-routing.module';

import { PdssQuestionnaireStep7Page } from './pdss-questionnaire-step7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireStep7PageRoutingModule
  ],
  declarations: [PdssQuestionnaireStep7Page]
})
export class PdssQuestionnaireStep7PageModule {}
