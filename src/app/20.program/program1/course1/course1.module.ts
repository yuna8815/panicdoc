import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course1PageRoutingModule } from './course1-routing.module';

import { Course1Page } from './course1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course1PageRoutingModule,
    SharedModule
  ],
  declarations: [Course1Page]
})
export class Course1PageModule {}
