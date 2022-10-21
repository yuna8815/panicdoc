import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { SharedModule } from 'src/app/shared/shared.module';

import { Program8PageRoutingModule } from './program8-routing.module';

import { Program8Page } from './program8.page';
import { Program8Course2Step1Component } from '../program8-course2-step1/program8-course2-step1.component';
import { Program8Course2Step2Component } from '../program8-course2-step2/program8-course2-step2.component';
import { Program8Course3Step1Component } from '../program8-course3-step1/program8-course3-step1.component';
import { Program8Course3Step2Component } from '../program8-course3-step2/program8-course3-step2.component';
import { Program8Course3Step3Component } from '../program8-course3-step3/program8-course3-step3.component';
import { Program8Course3Step4Component } from '../program8-course3-step4/program8-course3-step4.component';
import { Program8Course3Step5Component } from '../program8-course3-step5/program8-course3-step5.component';
import { Program8Course3Step6Component } from '../program8-course3-step6/program8-course3-step6.component';
import { Program8Course3Step7Component } from '../program8-course3-step7/program8-course3-step7.component';
import { Program8Course4Step1Component } from '../program8-course4-step1/program8-course4-step1.component';
import { Program8Course4Step2Component } from '../program8-course4-step2/program8-course4-step2.component';
import { Program8Course4Step3Component } from '../program8-course4-step3/program8-course4-step3.component';
import { Program8Course4Step4Component } from '../program8-course4-step4/program8-course4-step4.component';
import { Program8Course4Step5Component } from '../program8-course4-step5/program8-course4-step5.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Program8PageRoutingModule,
    NgChartsModule
  ],
  declarations: [
    Program8Page,
    Program8Course2Step1Component,
    Program8Course2Step2Component,
    Program8Course3Step1Component,
    Program8Course3Step2Component,
    Program8Course3Step3Component,
    Program8Course3Step4Component,
    Program8Course3Step5Component,
    Program8Course3Step6Component,
    Program8Course3Step7Component,
    Program8Course4Step1Component,
    Program8Course4Step2Component,
    Program8Course4Step3Component,
    Program8Course4Step4Component,
    Program8Course4Step5Component,
  ]
})
export class Program8PageModule {}
