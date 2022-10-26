import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanicFactorsPage } from './panic-factors.page';

const routes: Routes = [
  {
    path: '',
    component: PanicFactorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanicFactorsPageRoutingModule {}
