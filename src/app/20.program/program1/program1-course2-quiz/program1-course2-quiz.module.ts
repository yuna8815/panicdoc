import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';

import { Program1Course2QuizPageRoutingModule } from './program1-course2-quiz-routing.module';

import { Program1Course2QuizPage } from './program1-course2-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Program1Course2QuizPageRoutingModule
  ],
  declarations: [Program1Course2QuizPage]
})
export class Program1Course2QuizPageModule {}
