import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanicResultPage } from './panic-result.page';

const routes: Routes = [
  {
    path: '',
    component: PanicResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanicResultPageRoutingModule {}
