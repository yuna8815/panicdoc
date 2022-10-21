import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { AppqIntroPageRoutingModule } from './appq-intro-routing.module';

import { AppqIntroPage } from './appq-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppqIntroPageRoutingModule
  ],
  declarations: [AppqIntroPage]
})
export class AppqIntroPageModule {}
