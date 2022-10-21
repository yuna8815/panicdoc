import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Program1Page } from './program1.page';

const routes: Routes = [
  {
    path: '',
    component: Program1Page
  },
  {
    path: 'course1',
    component: Program1Page,
    data: { course: 1 },
  },
  {
    path: 'course1/:step',
    component: Program1Page,
    data: { course: 1 },
  },
  {
    path: 'course2',
    component: Program1Page,
    data: { course: 2 },
  },
  {
    path: 'course2/:step',
    component: Program1Page,
    data: { course: 2 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Program1PageRoutingModule {}
