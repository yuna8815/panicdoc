import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideMenuComponent } from 'src/app/home/side-menu/side-menu.component';
import { DiaryComponent } from 'src/app/home/diary/diary.component';
import { MyProgramComponent } from 'src/app/home/my-program/my-program.component';
import { PanicLogsComponent } from 'src/app/home/panic-logs/panic-logs.component';
import { WeeklyPrescriptionComponent } from 'src/app/home/weekly-prescription/weekly-prescription.component';

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
