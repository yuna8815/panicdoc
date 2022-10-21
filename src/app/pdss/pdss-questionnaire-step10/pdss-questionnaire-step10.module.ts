import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { PdssQuestionnaireStep10PageRoutingModule } from './pdss-questionnaire-step10-routing.module';

import { PdssQuestionnaireStep10Page } from './pdss-questionnaire-step10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireStep10PageRoutingModule
  ],
  declarations: [PdssQuestionnaireStep10Page]
})
export class PdssQuestionnaireStep10PageModule {}
