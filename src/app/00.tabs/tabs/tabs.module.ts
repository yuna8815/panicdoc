import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { DiaryComponent } from 'src/app/30.diary/diary/diary.component';
import { MyProgramComponent } from 'src/app/20.program/my-program/my-program.component';
import { PanicLogsComponent } from 'src/app/40.paniclogs/panic-logs/panic-logs.component';
import { WeeklyPrescriptionComponent } from 'src/app/50.report/weekly-prescription/weekly-prescription.component';
import { HomePage } from 'src/app/10.home/home/home.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    SharedModule
  ],
  declarations: [
    TabsPage,
    HomePage,
    DiaryComponent,
    MyProgramComponent,
    PanicLogsComponent,
    WeeklyPrescriptionComponent,
  ]
})
export class TabsPageModule {}
