import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { P2PageRoutingModule } from './p2-routing.module';

import { P2Page } from './p2.page';
import { P2Course1Step1Component } from './p2-course1-step1/p2-course1-step1.component';
import { P2Course1Step2Component } from './p2-course1-step2/p2-course1-step2.component';
import { P2Course1Step3Component } from './p2-course1-step3/p2-course1-step3.component';
import { P2Course1Step4Component } from './p2-course1-step4/p2-course1-step4.component';
import { P2Course1Step5Component } from './p2-course1-step5/p2-course1-step5.component';
import { P2Course1Step6Component } from './p2-course1-step6/p2-course1-step6.component';
import { P2Course1Step7Component } from './p2-course1-step7/p2-course1-step7.component';
import { P2Course2Step1Component } from './p2-course2-step1/p2-course2-step1.component';
import { P2Course2Step2Component } from './p2-course2-step2/p2-course2-step2.component';
import { P2Course2Step3Component } from './p2-course2-step3/p2-course2-step3.component';
import { P2Course2Step4Component } from './p2-course2-step4/p2-course2-step4.component';
import { P2Course2Step5Component } from './p2-course2-step5/p2-course2-step5.component';
import { P2Course2Step6Component } from './p2-course2-step6/p2-course2-step6.component';
import { P2Course2Step7Component } from './p2-course2-step7/p2-course2-step7.component';
import { P2Course2Step8Component } from './p2-course2-step8/p2-course2-step8.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    P2PageRoutingModule
  ],
  declarations: [
    P2Page,
    P2Course1Step1Component,
    P2Course1Step2Component,
    P2Course1Step3Component,
    P2Course1Step4Component,
    P2Course1Step5Component,
    P2Course1Step6Component,
    P2Course1Step7Component,
    P2Course2Step1Component,
    P2Course2Step2Component,
    P2Course2Step3Component,
    P2Course2Step4Component,
    P2Course2Step5Component,
    P2Course2Step6Component,
    P2Course2Step7Component,
    P2Course2Step8Component,
  ]
})
export class P2PageModule {}
