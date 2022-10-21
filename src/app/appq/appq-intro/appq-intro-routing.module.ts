import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppqIntroPage } from './appq-intro.page';

const routes: Routes = [
  {
    path: '',
    component: AppqIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppqIntroPageRoutingModule {}
