import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('src/app/10.home/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'programs',
        loadChildren: () => import('src/app/20.program/program/program.module').then( m => m.ProgramPageModule)
      },
      {
        path: 'diary',
        loadChildren: () => import('src/app/30.diary/diary/diary.module').then( m => m.DiaryPageModule)
      },
      {
        path: 'paniclogs',
        loadChildren: () => import('src/app/40.paniclogs/paniclogs/paniclogs.module').then( m => m.PaniclogsPageModule)
      },
      {
        path: 'report',
        loadChildren: () => import('src/app/50.report/report/report.module').then( m => m.ReportPageModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
