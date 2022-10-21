import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppqStep1Page } from './appq-step1.page';

const routes: Routes = [
  {
    path: '',
    component: AppqStep1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppqStep1PageRoutingModule {}
