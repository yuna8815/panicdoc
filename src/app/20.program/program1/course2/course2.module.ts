import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course2PageRoutingModule } from './course2-routing.module';

import { Course2Page } from './course2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course2PageRoutingModule,
    SharedModule
  ],
  declarations: [Course2Page]
})
export class Course2PageModule {}
