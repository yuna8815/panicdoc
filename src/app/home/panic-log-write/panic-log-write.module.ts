import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { PanicLogWritePageRoutingModule } from './panic-log-write-routing.module';

import { PanicLogWritePage } from './panic-log-write.page';
import { PanicLogWriteStep0Component } from '../PanicLogWrite/panic-log-write-step0/panic-log-write-step0.component';
import { PanicLogWriteStep1Component } from '../PanicLogWrite/panic-log-write-step1/panic-log-write-step1.component';
import { PanicLogWriteStep2Component } from '../PanicLogWrite/panic-log-write-step2/panic-log-write-step2.component';
import { PanicLogWriteStep3Component } from '../PanicLogWrite/panic-log-write-step3/panic-log-write-step3.component';
import { PanicLogWriteStep4Component } from '../PanicLogWrite/panic-log-write-step4/panic-log-write-step4.component';
import { PanicLogWriteStep5Component } from '../PanicLogWrite/panic-log-write-step5/panic-log-write-step5.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PanicLogWritePageRoutingModule
  ],
  declarations: [
    PanicLogWritePage,
    PanicLogWriteStep0Component,
    PanicLogWriteStep1Component,
    PanicLogWriteStep2Component,
    PanicLogWriteStep3Component,
    PanicLogWriteStep4Component,
    PanicLogWriteStep5Component,
  ]
})
export class PanicLogWritePageModule {}
