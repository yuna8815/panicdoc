import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireStep8Page } from './pdss-questionnaire-step8.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireStep8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireStep8PageRoutingModule {}
