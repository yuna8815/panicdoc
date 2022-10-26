import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanicFactorsEtcPage } from './panic-factors-etc.page';

const routes: Routes = [
  {
    path: '',
    component: PanicFactorsEtcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanicFactorsEtcPageRoutingModule {}
