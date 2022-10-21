import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppqPage } from './appq.page';

const routes: Routes = [
  {
    path: '',
    component: AppqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppqPageRoutingModule {}
