import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmotionDiaryPage } from './emotion-diary.page';

const routes: Routes = [
  {
    path: '',
    component: EmotionDiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmotionDiaryPageRoutingModule {}
