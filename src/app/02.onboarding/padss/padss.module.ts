import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadssPageRoutingModule } from './padss-routing.module';

import { PadssPage } from './padss.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadssPageRoutingModule,
    SharedModule
  ],
  declarations: [PadssPage]
})
export class PadssPageModule {}
