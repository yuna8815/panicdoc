import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { Program2PageRoutingModule } from './program2-routing.module';

import { Program2Page } from './program2.page';
import { Program2Course1Step1Component } from '../program2-course1-step1/program2-course1-step1.component';
import { Program2Course1Step2Component } from '../program2-course1-step2/program2-course1-step2.component';
import { Program2Course1Step3Component } from '../program2-course1-step3/program2-course1-step3.component';
import { Program2Course1Step4Component } from '../program2-course1-step4/program2-course1-step4.component';
import { Program2Course1Step5Component } from '../program2-course1-step5/program2-course1-step5.component';
import { Program2Course1Step6Component } from '../program2-course1-step6/program2-course1-step6.component';
import { Program2Course1Step7Component } from '../program2-course1-step7/program2-course1-step7.component';
import { Program2Course1Step8Component } from '../program2-course1-step8/program2-course1-step8.component';
import { Program2Course1Step9Component } from '../program2-course1-step9/program2-course1-step9.component';
import { Program2Course1Step10Component } from '../program2-course1-step10/program2-course1-step10.component';
import { Program2Course1Step11Component } from '../program2-course1-step11/program2-course1-step11.component';
import { Program2Course1Step12Component } from '../program2-course1-step12/program2-course1-step12.component';

import { Program2Course2Step1Component } from '../program2-course2-step1/program2-course2-step1.component';
import { Program2Course2Step2Component } from '../program2-course2-step2/program2-course2-step2.component';
import { Program2Course2Step3Component } from '../program2-course2-step3/program2-course2-step3.component';
import { Program2Course2Step4Component } from '../program2-course2-step4/program2-course2-step4.component';
import { Program2Course2Step5Component } from '../program2-course2-step5/program2-course2-step5.component';
import { Program2Course2Step6Component } from '../program2-course2-step6/program2-course2-step6.component';
import { Program2Course2Step7Component } from '../program2-course2-step7/program2-course2-step7.component';
import { Program2Course2Step8Component } from '../program2-course2-step8/program2-course2-step8.component';
import { Program2Course2Step9Component } from '../program2-course2-step9/program2-course2-step9.component';
import { Program2Course2Step10Component } from '../program2-course2-step10/program2-course2-step10.component';
import { Program2Course2Step11Component } from '../program2-course2-step11/program2-course2-step11.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Program2PageRoutingModule,
  ],
  declarations: [
    Program2Page,
    Program2Course1Step1Component,
    Program2Course1Step2Component,
    Program2Course1Step3Component,
    Program2Course1Step4Component,
    Program2Course1Step5Component,
    Program2Course1Step6Component,
    Program2Course1Step7Component,
    Program2Course1Step8Component,
    Program2Course1Step9Component,
    Program2Course1Step10Component,
    Program2Course1Step11Component,
    Program2Course1Step12Component,

    Program2Course2Step1Component,
    Program2Course2Step2Component,
    Program2Course2Step3Component,
    Program2Course2Step4Component,
    Program2Course2Step5Component,
    Program2Course2Step6Component,
    Program2Course2Step7Component,
    Program2Course2Step8Component,
    Program2Course2Step9Component,
    Program2Course2Step10Component,
    Program2Course2Step11Component,
  ]
})
export class Program2PageModule {}
