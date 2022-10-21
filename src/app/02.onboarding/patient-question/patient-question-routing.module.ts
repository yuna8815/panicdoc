import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientQuestionPage } from './patient-question.page';

const routes: Routes = [
  {
    path: '',
    component: PatientQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientQuestionPageRoutingModule {}
