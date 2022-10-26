import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanicResultPageRoutingModule } from './panic-result-routing.module';

import { PanicResultPage } from './panic-result.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanicResultPageRoutingModule,
    SharedModule
  ],
  declarations: [PanicResultPage]
})
export class PanicResultPageModule {}
