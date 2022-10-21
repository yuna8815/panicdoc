import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { ExposureRecordsPageRoutingModule } from './exposure-records-routing.module';

import { ExposureRecordsPage } from './exposure-records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ExposureRecordsPageRoutingModule
  ],
  declarations: [ExposureRecordsPage]
})
export class ExposureRecordsPageModule {}
