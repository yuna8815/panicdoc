import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPanicFactorsPage } from './my-panic-factors.page';

const routes: Routes = [
  {
    path: 'factors/:step',
    component: MyPanicFactorsPage,
    data: { course: 1 },
  },
  {
    path: 'tests',
    component: MyPanicFactorsPage,
    data: { course: 2 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPanicFactorsPageRoutingModule {}
