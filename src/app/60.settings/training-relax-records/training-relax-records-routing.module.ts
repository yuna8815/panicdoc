import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingRelaxRecordsPage } from './training-relax-records.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingRelaxRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRelaxRecordsPageRoutingModule {}
