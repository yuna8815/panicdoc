import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireStep7Page } from './pdss-questionnaire-step7.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireStep7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireStep7PageRoutingModule {}
