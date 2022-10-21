import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireStep1Page } from './pdss-questionnaire-step1.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireStep1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireStep1PageRoutingModule {}
