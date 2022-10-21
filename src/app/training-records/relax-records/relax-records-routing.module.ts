import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelaxRecordsPage } from './relax-records.page';

const routes: Routes = [
  {
    path: '',
    component: RelaxRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelaxRecordsPageRoutingModule {}
