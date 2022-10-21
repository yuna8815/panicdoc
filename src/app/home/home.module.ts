import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DiaryComponent } from './diary/diary.component';
import { MyProgramComponent } from './my-program/my-program.component';
import { PanicLogsComponent } from './panic-logs/panic-logs.component';
import { WeeklyPrescriptionComponent } from './weekly-prescription/weekly-prescription.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    SideMenuComponent,
    DiaryComponent,
    MyProgramComponent,
    PanicLogsComponent,
    WeeklyPrescriptionComponent,
  ],
})
export class HomePageModule {}
