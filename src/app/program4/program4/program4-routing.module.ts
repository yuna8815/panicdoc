import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Program4Page } from './program4.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course1',
    pathMatch: 'full',
  },
  {
    path: 'course1',
    component: Program4Page,
    data: { course: 1 },
  },
  {
    path: 'course1/:step',
    component: Program4Page,
    data: { course: 1 },
  },
  {
    path: 'course2',
    component: Program4Page,
    data: { course: 2 },
  },
  {
    path: 'course2/:step',
    component: Program4Page,
    data: { course: 2 },
  },
  {
    path: 'course3',
    component: Program4Page,
    data: { course: 3 },
  },
  {
    path: 'course3/:step',
    component: Program4Page,
    data: { course: 3 },
  },
  {
    path: 'course4',
    component: Program4Page,
    data: { course: 4 },
  },
  {
    path: 'course4/:step',
    component: Program4Page,
    data: { course: 4 },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Program4PageRoutingModule {}
