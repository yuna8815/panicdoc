import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireStep5Page } from './pdss-questionnaire-step5.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireStep5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireStep5PageRoutingModule {}
