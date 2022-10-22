import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyExposureRecordsPage } from './daily-exposure-records.page';

const routes: Routes = [
  {
    path: '',
    component: DailyExposureRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyExposureRecordsPageRoutingModule {}
