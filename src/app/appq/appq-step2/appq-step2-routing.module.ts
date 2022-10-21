import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppqStep2Page } from './appq-step2.page';

const routes: Routes = [
  {
    path: '',
    component: AppqStep2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppqStep2PageRoutingModule {}
