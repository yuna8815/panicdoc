import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaniclogsPageRoutingModule } from './paniclogs-routing.module';

import { PaniclogsPage } from './paniclogs.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaniclogsPageRoutingModule,
    SharedModule
  ],
  declarations: [PaniclogsPage]
})
export class PaniclogsPageModule {}
