import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireStep11Page } from './pdss-questionnaire-step11.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireStep11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireStep11PageRoutingModule {}
