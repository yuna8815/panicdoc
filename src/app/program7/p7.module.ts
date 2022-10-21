import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { P7PageRoutingModule } from './p7-routing.module';

import { P7Page } from './p7.page';
import { P7Course1Step1Component } from './p7-course1-step1/p7-course1-step1.component';
import { P7Course1Step2Component } from './p7-course1-step2/p7-course1-step2.component';
import { P7Course1Step3Component } from './p7-course1-step3/p7-course1-step3.component';
import { P7Course1Step4Component } from './p7-course1-step4/p7-course1-step4.component';
import { P7Course1Step5Component } from './p7-course1-step5/p7-course1-step5.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    P7PageRoutingModule
  ],
  declarations: [
    P7Page,
    P7Course1Step1Component,
    P7Course1Step2Component,
    P7Course1Step3Component,
    P7Course1Step4Component,
    P7Course1Step5Component,
  ]
})
export class P7PageModule {}
