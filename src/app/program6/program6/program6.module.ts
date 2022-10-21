import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { Program6PageRoutingModule } from './program6-routing.module';

import { Program6Page } from './program6.page';
import { Program6Course1Step1Component } from '../program6-course1-step1/program6-course1-step1.component';
import { Program6Course1Step2Component } from '../program6-course1-step2/program6-course1-step2.component';
import { Program6Course1Step3Component } from '../program6-course1-step3/program6-course1-step3.component';
import { Program6Course1Step4Component } from '../program6-course1-step4/program6-course1-step4.component';
import { Program6Course2Intro1Component } from '../program6-course2-intro1/program6-course2-intro1.component';
import { Program6Course2Step1Component } from '../program6-course2-step1/program6-course2-step1.component';
import { Program6Course2Step2Component } from '../program6-course2-step2/program6-course2-step2.component';
import { Program6Course2Step3Component } from '../program6-course2-step3/program6-course2-step3.component';
import { Program6Course2Step4Component } from '../program6-course2-step4/program6-course2-step4.component';
import { Program6Course3Step1Component } from '../program6-course3-step1/program6-course3-step1.component';
import { Program6Course3Step2Component } from '../program6-course3-step2/program6-course3-step2.component';
import { Program6Course3Step3Component } from '../program6-course3-step3/program6-course3-step3.component';
import { Program6Course3Step4Component } from '../program6-course3-step4/program6-course3-step4.component';
import { Program6Course3Step5Component } from '../program6-course3-step5/program6-course3-step5.component';
import { Program6Course3Step6Component } from '../program6-course3-step6/program6-course3-step6.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Program6PageRoutingModule
  ],
  declarations: [
    Program6Page,
    Program6Course1Step1Component,
    Program6Course1Step2Component,
    Program6Course1Step3Component,
    Program6Course1Step4Component,

    Program6Course2Intro1Component,
    Program6Course2Step1Component,
    Program6Course2Step2Component,
    Program6Course2Step3Component,
    Program6Course2Step4Component,

    Program6Course3Step1Component,
    Program6Course3Step2Component,
    Program6Course3Step3Component,
    Program6Course3Step4Component,
    Program6Course3Step5Component,
    Program6Course3Step6Component,
  ]
})
export class Program6PageModule {}
