import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyPanicFactorsPageRoutingModule } from './my-panic-factors-routing.module';

import { SharedModule } from '../../shared/shared.module';

import { MyPanicFactorsPage } from './my-panic-factors.page';
import { MyPanicFactorsStep1Component } from './my-panic-factors-step1/my-panic-factors-step1.component';
import { MyPanicFactorsStep2Component } from './my-panic-factors-step2/my-panic-factors-step2.component';
import { MyTestResultsComponent } from './my-test-results/my-test-results.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MyPanicFactorsPageRoutingModule
  ],
  declarations: [
    MyPanicFactorsPage,
    MyPanicFactorsStep1Component,
    MyPanicFactorsStep2Component,
    MyTestResultsComponent,
  ]
})
export class MyPanicFactorsPageModule {}
