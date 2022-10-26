import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanicFactorsSelectPageRoutingModule } from './panic-factors-select-routing.module';

import { PanicFactorsSelectPage } from './panic-factors-select.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanicFactorsSelectPageRoutingModule,
    SharedModule
  ],
  declarations: [PanicFactorsSelectPage]
})
export class PanicFactorsSelectPageModule {}
