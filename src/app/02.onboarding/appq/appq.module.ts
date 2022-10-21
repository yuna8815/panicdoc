import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppqPageRoutingModule } from './appq-routing.module';

import { AppqPage } from './appq.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppqPageRoutingModule,
    SharedModule
  ],
  declarations: [AppqPage]
})
export class AppqPageModule {}
