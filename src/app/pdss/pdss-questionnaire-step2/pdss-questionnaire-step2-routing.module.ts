import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireStep2Page } from './pdss-questionnaire-step2.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireStep2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireStep2PageRoutingModule {}
