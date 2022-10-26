import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanicFactorsEtcPageRoutingModule } from './panic-factors-etc-routing.module';

import { PanicFactorsEtcPage } from './panic-factors-etc.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanicFactorsEtcPageRoutingModule,
    SharedModule
  ],
  declarations: [PanicFactorsEtcPage]
})
export class PanicFactorsEtcPageModule {}
