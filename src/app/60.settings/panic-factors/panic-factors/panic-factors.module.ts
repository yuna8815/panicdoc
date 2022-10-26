import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanicFactorsPageRoutingModule } from './panic-factors-routing.module';

import { PanicFactorsPage } from './panic-factors.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanicFactorsPageRoutingModule,
    SharedModule
  ],
  declarations: [PanicFactorsPage]
})
export class PanicFactorsPageModule {}
