import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { Program7PageRoutingModule } from './program7-routing.module';

import { Program7Page } from './program7.page';
import { Program7Course1Step1Component } from '../program7-course1-step1/program7-course1-step1.component';
import { Program7Course1Step2Component } from '../program7-course1-step2/program7-course1-step2.component';
import { Program7Course1Step3Component } from '../program7-course1-step3/program7-course1-step3.component';
import { Program7Course1Step4Component } from '../program7-course1-step4/program7-course1-step4.component';
import { Program7Course1Step5Component } from '../program7-course1-step5/program7-course1-step5.component';
import { Program7Course1Step6Component } from '../program7-course1-step6/program7-course1-step6.component';
import { Program7Course1Step7Component } from '../program7-course1-step7/program7-course1-step7.component';
import { Program7Course2Step1Component } from '../program7-course2-step1/program7-course2-step1.component';
import { Program7Course2Step2Component } from '../program7-course2-step2/program7-course2-step2.component';
import { Program7Course2Step3Component } from '../program7-course2-step3/program7-course2-step3.component';
import { Program7Course2Step4Component } from '../program7-course2-step4/program7-course2-step4.component';
import { Program7Course3Step1Component } from '../program7-course3-step1/program7-course3-step1.component';
import { Program7Course3Step2Component } from '../program7-course3-step2/program7-course3-step2.component';
import { Program7Course3Step3Component } from '../program7-course3-step3/program7-course3-step3.component';
import { Program7Course3Step4Component } from '../program7-course3-step4/program7-course3-step4.component';
import { Program7Course3Step5Component } from '../program7-course3-step5/program7-course3-step5.component';
import { EditDailyExposureComponent } from '../edit-daily-exposure/edit-daily-exposure.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Program7PageRoutingModule
  ],
  declarations: [
    Program7Page,
    Program7Course1Step1Component,
    Program7Course1Step2Component,
    Program7Course1Step3Component,
    Program7Course1Step4Component,
    Program7Course1Step5Component,
    Program7Course1Step6Component,
    Program7Course1Step7Component,

    Program7Course2Step1Component,
    Program7Course2Step2Component,
    Program7Course2Step3Component,
    Program7Course2Step4Component,

    Program7Course3Step1Component,
    Program7Course3Step2Component,
    Program7Course3Step3Component,
    Program7Course3Step4Component,
    Program7Course3Step5Component,

    EditDailyExposureComponent,
  ]
})
export class Program7PageModule {}
