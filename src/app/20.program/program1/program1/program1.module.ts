import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { Program1PageRoutingModule } from './program1-routing.module';

import { Program1Page } from './program1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Program1PageRoutingModule
  ],
  declarations: [
    Program1Page
  ]
})
export class Program1PageModule {}
