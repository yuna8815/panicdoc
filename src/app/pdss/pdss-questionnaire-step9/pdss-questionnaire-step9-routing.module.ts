import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireStep9Page } from './pdss-questionnaire-step9.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireStep9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireStep9PageRoutingModule {}
