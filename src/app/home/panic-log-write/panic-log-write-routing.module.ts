import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanicLogWritePage } from './panic-log-write.page';

const routes: Routes = [
  {
    path: '',
    component: PanicLogWritePage
  },
  {
    path: ':step',
    component: PanicLogWritePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanicLogWritePageRoutingModule {}
