import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Program7Page } from './program7.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course1',
    pathMatch: 'full',
  },
  {
    path: 'course1',
    component: Program7Page,
    data: { course: 1 },
  },
  {
    path: 'course1/:step',
    component: Program7Page,
    data: { course: 1 },
  },
  {
    path: 'course2',
    component: Program7Page,
    data: { course: 2 },
  },
  {
    path: 'course2/:step',
    component: Program7Page,
    data: { course: 2 },
  },
  {
    path: 'course3',
    component: Program7Page,
    data: { course: 3 },
  },
  {
    path: 'course3/:step',
    component: Program7Page,
    data: { course: 3 },
  },
  {
    path: 'edit_exposure',
    component: Program7Page,
    data: { course: 8 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Program7PageRoutingModule {}
