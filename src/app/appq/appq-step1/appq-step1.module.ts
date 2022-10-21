import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { AppqStep1PageRoutingModule } from './appq-step1-routing.module';

import { AppqStep1Page } from './appq-step1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppqStep1PageRoutingModule
  ],
  declarations: [AppqStep1Page]
})
export class AppqStep1PageModule {}
