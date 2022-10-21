import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { PrescriptionViewPageRoutingModule } from './prescription-view-routing.module';

import { PrescriptionViewPage } from './prescription-view.page';
import { PrescriptionDetails1Component } from './prescription-details1/prescription-details1.component';
import { PrescriptionDetails2Component } from './prescription-details2/prescription-details2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PrescriptionViewPageRoutingModule
  ],
  declarations: [
    PrescriptionViewPage,
    PrescriptionDetails1Component,
    PrescriptionDetails2Component,
  ]
})
export class PrescriptionViewPageModule {}
