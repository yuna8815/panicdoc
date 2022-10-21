import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { PdssQuestionnaireResultPageRoutingModule } from './pdss-questionnaire-result-routing.module';

import { PdssQuestionnaireResultPage } from './pdss-questionnaire-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PdssQuestionnaireResultPageRoutingModule
  ],
  declarations: [PdssQuestionnaireResultPage]
})
export class PdssQuestionnaireResultPageModule {}
