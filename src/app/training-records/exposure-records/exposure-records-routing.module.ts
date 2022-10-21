import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExposureRecordsPage } from './exposure-records.page';

const routes: Routes = [
  {
    path: '',
    component: ExposureRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExposureRecordsPageRoutingModule {}
