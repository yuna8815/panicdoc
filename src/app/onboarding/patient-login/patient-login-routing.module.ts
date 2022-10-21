import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientLoginPage } from './patient-login.page';

const routes: Routes = [
  {
    path: '',
    component: PatientLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientLoginPageRoutingModule {}
