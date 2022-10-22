import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Program2Page } from './program2.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course1',
    pathMatch: 'full',
  },
  {
    path: 'course1',
    component: Program2Page,
    data: { course: 1 },
  },
  {
    path: 'course1/:step',
    component: Program2Page,
    data: { course: 1 },
  },
  {
    path: 'course2',
    component: Program2Page,
    data: { course: 2 },
  },
  {
    path: 'course2/:step',
    component: Program2Page,
    data: { course: 2 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Program2PageRoutingModule {}
