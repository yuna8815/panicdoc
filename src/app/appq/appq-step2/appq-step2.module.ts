import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { AppqStep2PageRoutingModule } from './appq-step2-routing.module';

import { AppqStep2Page } from './appq-step2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppqStep2PageRoutingModule
  ],
  declarations: [AppqStep2Page]
})
export class AppqStep2PageModule {}
