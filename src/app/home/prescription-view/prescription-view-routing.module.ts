import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrescriptionViewPage } from './prescription-view.page';

const routes: Routes = [
  {
    path: '',
    component: PrescriptionViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrescriptionViewPageRoutingModule {}
