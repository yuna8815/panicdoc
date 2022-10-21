import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireStep10Page } from './pdss-questionnaire-step10.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireStep10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireStep10PageRoutingModule {}
