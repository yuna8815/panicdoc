import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdssPage } from './pdss.page';

const routes: Routes = [
  {
    path: '',
    component: PdssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdssPageRoutingModule {}
