import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProgramComponent } from 'src/app/20.program/my-program/my-program.component';
import { DiaryComponent } from 'src/app/30.diary/diary/diary.component';
import { PanicLogsComponent } from 'src/app/40.paniclogs/panic-logs/panic-logs.component';
import { WeeklyPrescriptionComponent } from 'src/app/50.report/weekly-prescription/weekly-prescription.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'programs',
        component: MyProgramComponent,
      },
      {
        path: 'diary',
        component: DiaryComponent,
      },
      {
        path: 'paniclogs',
        component: PanicLogsComponent,
      },
      {
        path: 'weekly_prescription',
        component: WeeklyPrescriptionComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
