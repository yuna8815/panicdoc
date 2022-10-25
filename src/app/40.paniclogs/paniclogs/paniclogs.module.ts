import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaniclogsPageRoutingModule } from './paniclogs-routing.module';

import { PaniclogsPage } from './paniclogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaniclogsPageRoutingModule
  ],
  declarations: [PaniclogsPage]
})
export class PaniclogsPageModule {}
