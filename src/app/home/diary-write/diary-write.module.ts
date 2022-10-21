import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { DiaryWritePageRoutingModule } from './diary-write-routing.module';

import { DiaryWritePage } from './diary-write.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DiaryWritePageRoutingModule
  ],
  declarations: [DiaryWritePage]
})
export class DiaryWritePageModule {}
