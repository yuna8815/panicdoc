import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Program1Course2QuizPage } from './program1-course2-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: Program1Course2QuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Program1Course2QuizPageRoutingModule {}
