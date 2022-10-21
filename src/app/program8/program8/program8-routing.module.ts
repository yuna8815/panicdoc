import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Program8Page } from './program8.page';

const routes: Routes = [
  {
    path: '',
    component: Program8Page
  },
  {
    path: 'course1',
    component: Program8Page,
    data: { course: 1 },
  },
  {
    path: 'course1/:step',
    component: Program8Page,
    data: { course: 1 },
  },
  {
    path: 'course2',
    component: Program8Page,
    data: { course: 2 },
  },
  {
    path: 'course2/:step',
    component: Program8Page,
    data: { course: 2 },
  },
  {
    path: 'course3',
    component: Program8Page,
    data: { course: 3 },
  },
  {
    path: 'course3/:step',
    component: Program8Page,
    data: { course: 3 },
  },
  {
    path: 'course4',
    component: Program8Page,
    data: { course: 4 },
  },
  {
    path: 'course4/:step',
    component: Program8Page,
    data: { course: 4 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Program8PageRoutingModule {}
