import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { PdssQuestionnaireStep8PageRoutingModule } from './pdss-questionnaire-step8-routing.module';

import { PdssQuestionnaireStep8Page } from './pdss-questionnaire-step8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireStep8PageRoutingModule
  ],
  declarations: [PdssQuestionnaireStep8Page]
})
export class PdssQuestionnaireStep8PageModule {}
