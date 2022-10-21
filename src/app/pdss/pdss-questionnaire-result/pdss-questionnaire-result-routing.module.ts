import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssQuestionnaireResultPage } from './pdss-questionnaire-result.page';

const routes: Routes = [
  {
    path: '',
    component: PdssQuestionnaireResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssQuestionnaireResultPageRoutingModule {}
