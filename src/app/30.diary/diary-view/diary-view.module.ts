import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiaryViewPageRoutingModule } from './diary-view-routing.module';

import { DiaryViewPage } from './diary-view.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiaryViewPageRoutingModule,
    SharedModule
  ],
  declarations: [DiaryViewPage]
})
export class DiaryViewPageModule {}
