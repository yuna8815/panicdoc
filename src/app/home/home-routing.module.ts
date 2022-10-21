import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { MyProgramComponent } from './my-program/my-program.component';
import { DiaryComponent } from './diary/diary.component';
import { PanicLogsComponent } from './panic-logs/panic-logs.component';
import { WeeklyPrescriptionComponent } from './weekly-prescription/weekly-prescription.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'programs',
        component: MyProgramComponent,

        // 이 data를 home.page에서 어떻게 액세스하는지 모르겠음. home.page에 하드코딩해서 해결함.
        data: {
          headerIcon: 'programs.svg',
        }
      },
      {
        path: 'diary',
        component: DiaryComponent,
        data: {
          headerIcon: 'write.svg',
        }
      },
      {
        path: 'paniclogs',
        component: PanicLogsComponent,
        data: {
          headerIcon: 'head_panic.svg',
        }
      },
      {
        path: 'weekly_prescription',
        component: WeeklyPrescriptionComponent,
        data: {
          headerIcon: 'chart.svg',
        }
      },
    ],
  },

  //
  {
    path: 'diary-write',
    loadChildren: () => import('./diary-write/diary-write.module').then( m => m.DiaryWritePageModule)
  },
  {
    path: 'prescription-view',
    loadChildren: () => import('./prescription-view/prescription-view.module').then( m => m.PrescriptionViewPageModule)
  },  {
    path: 'panic-log-write',
    loadChildren: () => import('./panic-log-write/panic-log-write.module').then( m => m.PanicLogWritePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
