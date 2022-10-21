import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireStep4Page } from './pdss-questionnaire-step4.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireStep4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireStep4PageRoutingModule {}
