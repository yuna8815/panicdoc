import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { Program1PageRoutingModule } from './program1-routing.module';

import { Program1Page } from './program1.page';
import { Program1Course1Step1Component } from '../program1-course1-step1/program1-course1-step1.component';
import { Program1Course1Step2Component } from '../program1-course1-step2/program1-course1-step2.component';
import { Program1Course1Step3Component } from '../program1-course1-step3/program1-course1-step3.component';
import { Program1Course1Step4Component } from '../program1-course1-step4/program1-course1-step4.component';
import { Program1Course1Step5Component } from '../program1-course1-step5/program1-course1-step5.component';
import { Program1Course1Step6Component } from '../program1-course1-step6/program1-course1-step6.component';
import { Program1Course1Step7Component } from '../program1-course1-step7/program1-course1-step7.component';
import { Program1Course1Step8Component } from '../program1-course1-step8/program1-course1-step8.component';
import { Program1Course1Step9Component } from '../program1-course1-step9/program1-course1-step9.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Program1PageRoutingModule
  ],
  declarations: [
    Program1Page,
    Program1Course1Step1Component,
    Program1Course1Step2Component,
    Program1Course1Step3Component,
    Program1Course1Step4Component,
    Program1Course1Step5Component,
    Program1Course1Step6Component,
    Program1Course1Step7Component,
    Program1Course1Step8Component,
    Program1Course1Step9Component,
  ]
})
export class Program1PageModule {}
