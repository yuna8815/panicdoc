import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmotionDiaryPageRoutingModule } from './emotion-diary-routing.module';

import { EmotionDiaryPage } from './emotion-diary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmotionDiaryPageRoutingModule
  ],
  declarations: [EmotionDiaryPage]
})
export class EmotionDiaryPageModule {}
