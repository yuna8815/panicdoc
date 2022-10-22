import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { P2s2PageRoutingModule } from './p2s2-routing.module';

import { P2s2Page } from './p2s2.page';
import { P2s2Course1Step1Component } from './p2s2-course1-step1/p2s2-course1-step1.component';
import { P2s2Course1Step2Component } from './p2s2-course1-step2/p2s2-course1-step2.component';
import { P2s2Course1Step3Component } from './p2s2-course1-step3/p2s2-course1-step3.component';
import { P2s2Course1Step4Component } from './p2s2-course1-step4/p2s2-course1-step4.component';
import { P2s2Course2Step1Component } from './p2s2-course2-step1/p2s2-course2-step1.component';
import { P2s2Course2Step2Component } from './p2s2-course2-step2/p2s2-course2-step2.component';
import { P2s2Course2Step3Component } from './p2s2-course2-step3/p2s2-course2-step3.component';
import { P2s2Course2Step4Component } from './p2s2-course2-step4/p2s2-course2-step4.component';
import { P2s2Course2Step5Component } from './p2s2-course2-step5/p2s2-course2-step5.component';
import { P2s2Course2Step6Component } from './p2s2-course2-step6/p2s2-course2-step6.component';
import { P2s2Course2Step7Component } from './p2s2-course2-step7/p2s2-course2-step7.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    P2s2PageRoutingModule
  ],
  declarations: [
    P2s2Page,
    P2s2Course1Step1Component,
    P2s2Course1Step2Component,
    P2s2Course1Step3Component,
    P2s2Course1Step4Component,
    P2s2Course2Step1Component,
    P2s2Course2Step2Component,
    P2s2Course2Step3Component,
    P2s2Course2Step4Component,
    P2s2Course2Step5Component,
    P2s2Course2Step6Component,
    P2s2Course2Step7Component,
  ]
})
export class P2s2PageModule {}
