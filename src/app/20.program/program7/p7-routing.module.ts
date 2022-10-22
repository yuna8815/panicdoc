import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P7Page } from './p7.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course1',
    pathMatch: 'full',
  },
  {
    path: 'course1',
    component: P7Page,
    data: { course: 1 },
  },
  {
    path: 'course1/:step',
    component: P7Page,
    data: { course: 1 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P7PageRoutingModule {}
