import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P5Page } from './p5.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course1',
    pathMatch: 'full',
  },
  {
    path: 'course1',
    component: P5Page,
    data: { course: 1 },
  },
  {
    path: 'course1/:step',
    component: P5Page,
    data: { course: 1 },
  },
  {
    path: 'course2',
    component: P5Page,
    data: { course: 2 },
  },
  {
    path: 'course2/:step',
    component: P5Page,
    data: { course: 2 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P5PageRoutingModule {}
