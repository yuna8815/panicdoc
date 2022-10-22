import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { Program5PageRoutingModule } from './program5-routing.module';

import { Program5Page } from './program5.page';
import { Program5Course1Step1Component } from '../program5-course1-step1/program5-course1-step1.component';
import { Program5Course1Step2Component } from '../program5-course1-step2/program5-course1-step2.component';
import { Program5Course1Step3Component } from '../program5-course1-step3/program5-course1-step3.component';
import { Program5Course1Step4Component } from '../program5-course1-step4/program5-course1-step4.component';
import { Program5Course1Step5Component } from '../program5-course1-step5/program5-course1-step5.component';
import { Program5Course1Step6Component } from '../program5-course1-step6/program5-course1-step6.component';
import { Program5Course2Step0Component } from '../program5-course2-step0/program5-course2-step0.component';
import { Program5Course2Step1Component } from '../program5-course2-step1/program5-course2-step1.component';
import { Program5Course2Step2Component } from '../program5-course2-step2/program5-course2-step2.component';
import { Program5Course2Step3Component } from '../program5-course2-step3/program5-course2-step3.component';
import { Program5Course2Step4Component } from '../program5-course2-step4/program5-course2-step4.component';
import { Program5Course2Step5Component } from '../program5-course2-step5/program5-course2-step5.component';
import { Program5Course2Step6Component } from '../program5-course2-step6/program5-course2-step6.component';
import { Program5Course3Step1Component } from '../program5-course3-step1/program5-course3-step1.component';
import { Program5Course3Step2Component } from '../program5-course3-step2/program5-course3-step2.component';
import { Program5Course3Step3Component } from '../program5-course3-step3/program5-course3-step3.component';
import { Program5Course3Step4Component } from '../program5-course3-step4/program5-course3-step4.component';
import { Program5Course3Step5Component } from '../program5-course3-step5/program5-course3-step5.component';
import { Program5Course3Step6Component } from '../program5-course3-step6/program5-course3-step6.component';
import { Program5Course3Step7Component } from '../program5-course3-step7/program5-course3-step7.component';
import { Program5Course4Step1Component } from '../program5-course4-step1/program5-course4-step1.component';
import { Program5Course4Step2Component } from '../program5-course4-step2/program5-course4-step2.component';
import { Program5Course4Step3Component } from '../program5-course4-step3/program5-course4-step3.component';
import { Program5Course4Step4Component } from '../program5-course4-step4/program5-course4-step4.component';
import { Program5Course4Step5Component } from '../program5-course4-step5/program5-course4-step5.component';
import { Program5Course4Step6Component } from '../program5-course4-step6/program5-course4-step6.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Program5PageRoutingModule
  ],
  declarations: [
    Program5Page,
    Program5Course1Step1Component,
    Program5Course1Step2Component,
    Program5Course1Step3Component,
    Program5Course1Step4Component,
    Program5Course1Step5Component,
    Program5Course1Step6Component,

    Program5Course2Step0Component,
    Program5Course2Step1Component,
    Program5Course2Step2Component,
    Program5Course2Step3Component,
    Program5Course2Step4Component,
    Program5Course2Step5Component,
    Program5Course2Step6Component,

    Program5Course3Step1Component,
    Program5Course3Step2Component,
    Program5Course3Step3Component,
    Program5Course3Step4Component,
    Program5Course3Step5Component,
    Program5Course3Step6Component,
    Program5Course3Step7Component,

    Program5Course4Step1Component,
    Program5Course4Step2Component,
    Program5Course4Step3Component,
    Program5Course4Step4Component,
    Program5Course4Step5Component,
    Program5Course4Step6Component,
  ]
})
export class Program5PageModule {}
