import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { DailyExposureRecordsPageRoutingModule } from './daily-exposure-records-routing.module';

import { DailyExposureRecordsPage } from './daily-exposure-records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DailyExposureRecordsPageRoutingModule
  ],
  declarations: [DailyExposureRecordsPage]
})
export class DailyExposureRecordsPageModule {}
