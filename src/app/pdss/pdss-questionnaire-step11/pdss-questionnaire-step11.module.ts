import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { PdssQuestionnaireStep11PageRoutingModule } from './pdss-questionnaire-step11-routing.module';

import { PdssQuestionnaireStep11Page } from './pdss-questionnaire-step11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireStep11PageRoutingModule
  ],
  declarations: [PdssQuestionnaireStep11Page]
})
export class PdssQuestionnaireStep11PageModule {}
