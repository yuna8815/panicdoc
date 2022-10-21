import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireStep3Page } from './pdss-questionnaire-step3.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireStep3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireStep3PageRoutingModule {}
