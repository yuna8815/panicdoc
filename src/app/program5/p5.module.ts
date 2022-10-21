import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { P5PageRoutingModule } from './p5-routing.module';

import { P5Page } from './p5.page';
import { P5Course1Step1Component } from './p5-course1-step1/p5-course1-step1.component';
import { P5Course1Step2Component } from './p5-course1-step2/p5-course1-step2.component';
import { P5Course1Step3Component } from './p5-course1-step3/p5-course1-step3.component';
import { P5Course1Step4Component } from './p5-course1-step4/p5-course1-step4.component';
import { P5Course1Step5Component } from './p5-course1-step5/p5-course1-step5.component';
import { P5Course1Step6Component } from './p5-course1-step6/p5-course1-step6.component';
import { P5Course2Step1Component } from './p5-course2-step1/p5-course2-step1.component';
import { P5Course2Step10Component } from './p5-course2-step10/p5-course2-step10.component';
import { P5Course2Step11Component } from './p5-course2-step11/p5-course2-step11.component';
import { P5Course2Step12Component } from './p5-course2-step12/p5-course2-step12.component';
import { P5Course2Step2Component } from './p5-course2-step2/p5-course2-step2.component';
import { P5Course2Step3Component } from './p5-course2-step3/p5-course2-step3.component';
import { P5Course2Step4Component } from './p5-course2-step4/p5-course2-step4.component';
import { P5Course2Step5Component } from './p5-course2-step5/p5-course2-step5.component';
import { P5Course2Step6Component } from './p5-course2-step6/p5-course2-step6.component';
import { P5Course2Step7Component } from './p5-course2-step7/p5-course2-step7.component';
import { P5Course2Step8Component } from './p5-course2-step8/p5-course2-step8.component';
import { P5Course2Step9Component } from './p5-course2-step9/p5-course2-step9.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    P5PageRoutingModule
  ],
  declarations: [
    P5Page,
    P5Course1Step1Component,
    P5Course1Step2Component,
    P5Course1Step3Component,
    P5Course1Step4Component,
    P5Course1Step5Component,
    P5Course1Step6Component,
    P5Course2Step1Component,
    P5Course2Step2Component,
    P5Course2Step3Component,
    P5Course2Step4Component,
    P5Course2Step5Component,
    P5Course2Step6Component,
    P5Course2Step7Component,
    P5Course2Step8Component,
    P5Course2Step9Component,
    P5Course2Step10Component,
    P5Course2Step11Component,
    P5Course2Step12Component,
  ]
})
export class P5PageModule {}
