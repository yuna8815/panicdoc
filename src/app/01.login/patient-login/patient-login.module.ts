import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { PatientLoginPageRoutingModule } from './patient-login-routing.module';

import { PatientLoginPage } from './patient-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PatientLoginPageRoutingModule
  ],
  declarations: [PatientLoginPage]
})
export class PatientLoginPageModule {}
