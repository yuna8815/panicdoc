import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInfoInputPage } from './user-info-input.page';

const routes: Routes = [
  {
    path: '',
    component: UserInfoInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserInfoInputPageRoutingModule {}
