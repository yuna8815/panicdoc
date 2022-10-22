import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { RelaxRecordsPageRoutingModule } from './relax-records-routing.module';

import { RelaxRecordsPage } from './relax-records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RelaxRecordsPageRoutingModule
  ],
  declarations: [RelaxRecordsPage]
})
export class RelaxRecordsPageModule {}
