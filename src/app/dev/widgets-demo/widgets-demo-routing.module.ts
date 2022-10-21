import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidgetsDemoPage } from './widgets-demo.page';

const routes: Routes = [
  {
    path: '',
    component: WidgetsDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetsDemoPageRoutingModule {}
