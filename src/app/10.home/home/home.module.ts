import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideMenuComponent } from 'src/app/home/side-menu/side-menu.component';
import { DiaryComponent } from 'src/app/30.diary/diary/diary.component';
import { MyProgramComponent } from 'src/app/20.program/my-program/my-program.component';
import { WeeklyPrescriptionComponent } from 'src/app/50.report/weekly-prescription/weekly-prescription.component';
import { PanicLogsComponent } from 'src/app/40.paniclogs/panic-logs/panic-logs.component';

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
