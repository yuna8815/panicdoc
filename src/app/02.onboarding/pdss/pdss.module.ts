import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdssPageRoutingModule } from './pdss-routing.module';

import { PdssPage } from './pdss.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdssPageRoutingModule,
    SharedModule
  ],
  declarations: [PdssPage]
})
export class PdssPageModule {}
