import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    // children: [
    //   {
    //     path: 'programs',
    //     component: MyProgramComponent,

    //     // 이 data를 home.page에서 어떻게 액세스하는지 모르겠음. home.page에 하드코딩해서 해결함.
    //     data: {
    //       headerIcon: 'programs.svg',
    //     }
    //   },
    //   {
    //     path: 'diary',
    //     component: DiaryComponent,
    //     data: {
    //       headerIcon: 'write.svg',
    //     }
    //   },
    //   {
    //     path: 'paniclogs',
    //     component: PanicLogsComponent,
    //     data: {
    //       headerIcon: 'head_panic.svg',
    //     }
    //   },
    //   {
    //     path: 'weekly_prescription',
    //     component: WeeklyPrescriptionComponent,
    //     data: {
    //       headerIcon: 'chart.svg',
    //     }
    //   },
    // ],
  },

  //

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
