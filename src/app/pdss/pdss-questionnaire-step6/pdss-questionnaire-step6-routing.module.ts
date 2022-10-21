import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireStep6Page } from './pdss-questionnaire-step6.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireStep6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireStep6PageRoutingModule {}
