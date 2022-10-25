import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaniclogsPage } from './paniclogs.page';

const routes: Routes = [
  {
    path: '',
    component: PaniclogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaniclogsPageRoutingModule {}
