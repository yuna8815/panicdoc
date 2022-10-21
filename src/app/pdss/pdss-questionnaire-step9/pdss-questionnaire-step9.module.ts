import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { PdssQuestionnaireStep9PageRoutingModule } from './pdss-questionnaire-step9-routing.module';

import { PdssQuestionnaireStep9Page } from './pdss-questionnaire-step9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireStep9PageRoutingModule
  ],
  declarations: [PdssQuestionnaireStep9Page]
})
export class PdssQuestionnaireStep9PageModule {}
