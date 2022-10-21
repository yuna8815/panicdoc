import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { WidgetsDemoPageRoutingModule } from './widgets-demo-routing.module';

import { WidgetsDemoPage } from './widgets-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    WidgetsDemoPageRoutingModule
  ],
  declarations: [WidgetsDemoPage]
})
export class WidgetsDemoPageModule {}
