import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { Program9PageRoutingModule } from './program9-routing.module';

import { Program9Page } from './program9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Program9PageRoutingModule
  ],
  declarations: [Program9Page]
})
export class Program9PageModule {}
