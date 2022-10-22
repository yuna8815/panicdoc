import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { Program3PageRoutingModule } from './program3-routing.module';

import { Program3Page } from './program3.page';
import { Program3Course1Step1Component } from '../program3-course1-step1/program3-course1-step1.component';
import { Program3Course1Step2Component } from '../program3-course1-step2/program3-course1-step2.component';
import { Program3Course1Step3Component } from '../program3-course1-step3/program3-course1-step3.component';
import { Program3Course2Step1Component } from '../program3-course2-step1/program3-course2-step1.component';
import { Program3Course2Step2Component } from '../program3-course2-step2/program3-course2-step2.component';
import { Program3Course2Step3Component } from '../program3-course2-step3/program3-course2-step3.component';
import { Program3Course2Step4Component } from '../program3-course2-step4/program3-course2-step4.component';
import { Program3Course3Step1Component } from '../program3-course3-step1/program3-course3-step1.component';
import { Program3Course3Step2Component } from '../program3-course3-step2/program3-course3-step2.component';
import { Program3Course4Step1Component } from '../program3-course4-step1/program3-course4-step1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Program3PageRoutingModule
  ],
  declarations: [
    Program3Page,
    Program3Course1Step1Component,
    Program3Course1Step2Component,
    Program3Course1Step3Component,
    Program3Course2Step1Component,
    Program3Course2Step2Component,
    Program3Course2Step3Component,
    Program3Course2Step4Component,
    Program3Course3Step1Component,
    Program3Course3Step2Component,
    Program3Course4Step1Component,
  ]
})
export class Program3PageModule {}
