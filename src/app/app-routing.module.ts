import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fly',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadChildren: () => import('./onboarding/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'patient-login',
    loadChildren: () => import('./onboarding/patient-login/patient-login.module').then( m => m.PatientLoginPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./onboarding/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'patient-question',
    loadChildren: () => import('./patient-question/patient-question.module').then( m => m.PatientQuestionPageModule)
  },
  {
    path: 'user-info-input',
    loadChildren: () => import('./user-info-input/user-info-input.module').then( m => m.UserInfoInputPageModule)
  },
  // PDSS
  {
    path: 'pdss-questionnaire',
    loadChildren: () => import('./pdss/pdss-questionnaire/pdss-questionnaire.module').then( m => m.PdssQuestionnairePageModule)
  },
  {
    path: 'pdss-questionnaire-step1',
    loadChildren: () => import('./pdss/pdss-questionnaire-step1/pdss-questionnaire-step1.module').then( m => m.PdssQuestionnaireStep1PageModule)
  },
  {
    path: 'pdss-questionnaire-step2',
    loadChildren: () => import('./pdss/pdss-questionnaire-step2/pdss-questionnaire-step2.module').then( m => m.PdssQuestionnaireStep2PageModule)
  },
  {
    path: 'pdss-questionnaire-step3',
    loadChildren: () => import('./pdss/pdss-questionnaire-step3/pdss-questionnaire-step3.module').then( m => m.PdssQuestionnaireStep3PageModule)
  },
  {
    path: 'pdss-questionnaire-step4',
    loadChildren: () => import('./pdss/pdss-questionnaire-step4/pdss-questionnaire-step4.module').then( m => m.PdssQuestionnaireStep4PageModule)
  },
  {
    path: 'pdss-questionnaire-step5',
    loadChildren: () => import('./pdss/pdss-questionnaire-step5/pdss-questionnaire-step5.module').then( m => m.PdssQuestionnaireStep5PageModule)
  },
  {
    path: 'pdss-questionnaire-step6',
    loadChildren: () => import('./pdss/pdss-questionnaire-step6/pdss-questionnaire-step6.module').then( m => m.PdssQuestionnaireStep6PageModule)
  },
  {
    path: 'pdss-questionnaire-step7',
    loadChildren: () => import('./pdss/pdss-questionnaire-step7/pdss-questionnaire-step7.module').then( m => m.PdssQuestionnaireStep7PageModule)
  },
  {
    path: 'pdss-questionnaire-step8',
    loadChildren: () => import('./pdss/pdss-questionnaire-step8/pdss-questionnaire-step8.module').then( m => m.PdssQuestionnaireStep8PageModule)
  },
  {
    path: 'pdss-questionnaire-step9',
    loadChildren: () => import('./pdss/pdss-questionnaire-step9/pdss-questionnaire-step9.module').then( m => m.PdssQuestionnaireStep9PageModule)
  },
  {
    path: 'pdss-questionnaire-step10',
    loadChildren: () => import('./pdss/pdss-questionnaire-step10/pdss-questionnaire-step10.module').then( m => m.PdssQuestionnaireStep10PageModule)
  },
  {
    path: 'pdss-questionnaire-step11',
    loadChildren: () => import('./pdss/pdss-questionnaire-step11/pdss-questionnaire-step11.module').then( m => m.PdssQuestionnaireStep11PageModule)
  },
  {
    path: 'pdss-questionnaire-result',
    loadChildren: () => import('./pdss/pdss-questionnaire-result/pdss-questionnaire-result.module').then( m => m.PdssQuestionnaireResultPageModule)
  },
  // APPQ
  {
    path: 'appq-intro',
    loadChildren: () => import('./appq/appq-intro/appq-intro.module').then( m => m.AppqIntroPageModule)
  },
  {
    path: 'appq-step1',
    loadChildren: () => import('./appq/appq-step1/appq-step1.module').then( m => m.AppqStep1PageModule)
  },
  {
    path: 'appq-step2',
    loadChildren: () => import('./appq/appq-step2/appq-step2.module').then( m => m.AppqStep2PageModule)
  },
  // 홈
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // 프로그램1
  {
    path: 'program1',
    loadChildren: () => import('./program1/program1/program1.module').then( m => m.Program1PageModule)
  },
  {
    path: 'program1-course2-quiz',
    loadChildren: () => import('./program1/program1-course2-quiz/program1-course2-quiz.module').then( m => m.Program1Course2QuizPageModule)
  },
  {
    path: 'program1-course2-quiz/:step',
    loadChildren: () => import('./program1/program1-course2-quiz/program1-course2-quiz.module').then( m => m.Program1Course2QuizPageModule)
  },
  // 프로그램2
  {
    path: 'program2',
    loadChildren: () => import('./program2/program2/program2.module').then( m => m.Program2PageModule)
  },
  // 프로그램3
  {
    path: 'program3',
    loadChildren: () => import('./program3/program3/program3.module').then( m => m.Program3PageModule)
  },
  // 프로그램4
  {
    path: 'program4',
    loadChildren: () => import('./program4/program4/program4.module').then( m => m.Program4PageModule)
  },
  // 프로그램5
  {
    path: 'program5',
    loadChildren: () => import('./program5/program5/program5.module').then( m => m.Program5PageModule)
  },
  // 프로그램6
  {
    path: 'program6',
    loadChildren: () => import('./program6/program6/program6.module').then( m => m.Program6PageModule)
  },
  // 프로그램7
  {
    path: 'program7',
    loadChildren: () => import('./program7/program7/program7.module').then( m => m.Program7PageModule)
  },
  // 프로그램8
  {
    path: 'program8',
    loadChildren: () => import('./program8/program8/program8.module').then( m => m.Program8PageModule)
  },
  // 프로그램9
  {
    path: 'program9',
    loadChildren: () => import('./program9/program9/program9.module').then( m => m.Program9PageModule)
  },
  // 보강수업 - P2
  {
    path: 'p2_1',
    loadChildren: () => import('./program2/p2.module').then( m => m.P2PageModule)
  },
  {
    path: 'p2_2',
    loadChildren: () => import('./program2/p2s2.module').then( m => m.P2s2PageModule)
  },
  {
    path: 'p5',
    loadChildren: () => import('./program5/p5.module').then( m => m.P5PageModule)
  },
  {
    path: 'p7',
    loadChildren: () => import('./program7/p7.module').then( m => m.P7PageModule)
  },
  // 나의 공황 촉발 요인
  {
    path: 'my-panic-factors',
    loadChildren: () => import('./my-panic-factors/my-panic-factors.module').then( m => m.MyPanicFactorsPageModule)
  },
  // 감정일기
  {
    path: 'emotion-diary',
    loadChildren: () => import('./emotion-diary/emotion-diary.module').then( m => m.EmotionDiaryPageModule)
  },
  // 개발자
  {
    path: 'fly',
    loadChildren: () => import('./dev/fly/fly.module').then( m => m.FlyPageModule)
  },
  {
    path: 'widgets-demo',
    loadChildren: () => import('./dev/widgets-demo/widgets-demo.module').then( m => m.WidgetsDemoPageModule)
  },
  // 훈련기록
  {
    path: 'training-records/relax-records',
    loadChildren: () => import('./training-records/relax-records/relax-records.module').then( m => m.RelaxRecordsPageModule)
  },
  {
    path: 'training-records/exposure-records',
    loadChildren: () => import('./training-records/exposure-records/exposure-records.module').then( m => m.ExposureRecordsPageModule)
  },
  {
    path: 'training-records/daily-exposure-records',
    loadChildren: () => import('./training-records/daily-exposure-records/daily-exposure-records.module').then( m => m.DailyExposureRecordsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
