import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnairePage } from './pdss-questionnaire.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnairePageRoutingModule {}
