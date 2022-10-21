import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { UserInfoInputPageRoutingModule } from './user-info-input-routing.module';

import { UserInfoInputPage } from './user-info-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UserInfoInputPageRoutingModule
  ],
  declarations: [UserInfoInputPage]
})
export class UserInfoInputPageModule {}
