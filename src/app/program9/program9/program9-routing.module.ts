import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Program9Page } from './program9.page';

const routes: Routes = [
  {
    path: '',
    component: Program9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Program9PageRoutingModule {}
