import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P2Page } from './p2.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course1',
    pathMatch: 'full',
  },
  {
    path: 'course1',
    component: P2Page,
    data: { course: 1 },
  },
  {
    path: 'course1/:step',
    component: P2Page,
    data: { course: 1 },
  },
  {
    path: 'course2',
    component: P2Page,
    data: { course: 2 },
  },
  {
    path: 'course2/:step',
    component: P2Page,
    data: { course: 2 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P2PageRoutingModule {}
