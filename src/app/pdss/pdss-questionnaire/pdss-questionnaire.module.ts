import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { PdssQuestionnairePageRoutingModule } from './pdss-questionnaire-routing.module';

import { PdssQuestionnairePage } from './pdss-questionnaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnairePageRoutingModule
  ],
  declarations: [PdssQuestionnairePage]
})
export class PdssQuestionnairePageModule {}
