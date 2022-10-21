import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadssPage } from './padss.page';

const routes: Routes = [
  {
    path: '',
    component: PadssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadssPageRoutingModule {}
