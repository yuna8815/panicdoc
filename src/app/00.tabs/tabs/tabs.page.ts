import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { IonButton } from '@ionic/angular';
import { SmdCourseCardComponent } from 'src/app/00.component/smd-course-card/smd-course-card.component';
import { CourseData, RelaxTraining } from 'src/app/10.home/home/courses';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  week: string;
  day = 1;
  title = 'TITLE';
  description = '';
  courses = [];
  guideStep = 0;
  releaxTrainingGuide = false
  headerIcon;
  headerText;
  finishRelax;
  alarmNew = true;

  guide1 = {
    cx1: 0,
    cy1: 0,
    cx2: 0,
    cy2: 0,
    rects: [
      { x: 0, y: 0, width: 0, height: 0, rx: 8, ry: 0 },
      { x: 0, y: 0, width: 0, height: 0, rx: 8, ry: 0 }
    ],
    footerRect: {} as any,
    menu: [{}, {}, {}, {}, {}] as any[],
  };
  guide2 = {
    relaxRect: {} as any,
  };

  CourseData = CourseData;

  @ViewChild('notificationsButton', { static: true }) notificationsButton: IonButton;
  @ViewChild('menuButton', { static: true }) menuButton: IonButton;
  @ViewChildren(SmdCourseCardComponent) courseCards: QueryList<SmdCourseCardComponent>;
  @ViewChild('footer', { static: true }) footerElem: ElementRef<HTMLDivElement>;
  @ViewChild('menuHome', { static: true }) menuHomeElem: ElementRef<HTMLButtonElement>;
  @ViewChild('menuProgram', { static: true }) menuProgramElem: ElementRef<HTMLButtonElement>;
  @ViewChild('menuDiary', { static: true }) menuDiaryElem: ElementRef<HTMLButtonElement>;
  @ViewChild('menuRecord', { static: true }) menuRecordElem: ElementRef<HTMLButtonElement>;
  @ViewChild('menuPrescription', { static: true }) menuPrescriptionElem: ElementRef<HTMLButtonElement>;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    public context: GlobalContextService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.week = null;
      if (params['program']) {
        this.week = params['program'] || '1';
        const currCourseData = CourseData[this.week];
        if (currCourseData) {
          this.title = currCourseData.title;
          this.description = currCourseData.description;
          this.courses = currCourseData.courses;
        }
      }
      if (params['finishRelax']) {
        this.finishRelax = true;
      }
    });

    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        if (data.url == '/tabs/diary') {
          this.headerIcon = 'write.svg';
          this.headerText = '????????????'
        } else if (data.url == '/tabs/programs') {
          this.headerIcon = 'programs.svg';
          this.headerText = '????????????'
        } else if (data.url == '/tabs/paniclogs') {
          this.headerIcon = 'head_panic.svg';
          this.headerText = '????????????'
        } else if (data.url == '/tabs/report') {
          this.headerIcon = 'chart.svg';
          this.headerText = '????????????'
        } else {
          this.headerIcon = null;
          this.headerText = null;
        }
      }
    });

    // ????????? ??????
    // if (this.week == '1') {
    //   setTimeout(() => {
    //     this.getGuideElementsGeometry();
    //     this.guideStep = 1;
    //   }, 500);
    // }
    // if (this.finishRelax) {
    //   setTimeout(() => {
    //     this.getGuideElementsGeometry();
    //     this.releaxTrainingGuide = true;
    //   }, 500);
    // }
  }

  ionViewDidEnter() {
    // ????????? ??????
    if (this.week == '1') {
      setTimeout(() => {
        this.getGuideElementsGeometry();
        this.guideStep = 1;
      }, 500);
    }
    if (this.finishRelax) {
      this.getGuideElementsGeometry();
      this.releaxTrainingGuide = true;
    }
  }

  highlightTest() {
    this.guideStep = 1;
  }

  guideNext() {
    this.guideStep++;
    if (this.guideStep == 6) {
      this.guideStep = 0;
    }
  }

  getGuideElementsGeometry() {
    let elem = this.notificationsButton['el'] as HTMLElement;
    let rect = elem.getBoundingClientRect();
    this.guide1.cx1 = rect.left + rect.width / 2;
    this.guide1.cy1 = rect.top + rect.height / 2;

    elem = this.menuButton['el'] as HTMLElement;
    rect = elem.getBoundingClientRect();
    this.guide1.cx2 = rect.left + rect.width / 2;
    this.guide1.cy2 = rect.top + rect.height / 2;

    elem = this.courseCards.toArray()[0].el.nativeElement;
    rect = elem.getBoundingClientRect();
    this.guide1.rects[0] = { x: rect.x, y: rect.y, width: rect.width, height: rect.height, rx: 8, ry: 0 };
    elem = this.courseCards.toArray()[1].el.nativeElement;
    rect = elem.getBoundingClientRect();
    this.guide1.rects[1] = { x: rect.x, y: rect.y, width: rect.width, height: rect.height, rx: 8, ry: 0 };

    elem = this.footerElem.nativeElement;
    rect = elem.getBoundingClientRect();
    this.guide1.footerRect = {
      x: rect.x, y: rect.y, width: rect.width, height: rect.height + 50,
    };

    elem = this.menuHomeElem.nativeElement;
    rect = elem.getBoundingClientRect();
    this.guide1.menu[0].cx = rect.left + rect.width / 2;
    this.guide1.menu[0].cy = rect.top + rect.height / 2 - 5;

    elem = this.menuProgramElem.nativeElement;
    rect = elem.getBoundingClientRect();
    this.guide1.menu[1].cx = rect.left + rect.width / 2;
    this.guide1.menu[1].cy = rect.top + rect.height / 2 - 5;

    elem = this.menuDiaryElem.nativeElement;
    rect = elem.getBoundingClientRect();
    this.guide1.menu[2].cx = rect.left + rect.width / 2;
    this.guide1.menu[2].cy = rect.top + rect.height / 2 - 45;

    elem = this.menuRecordElem.nativeElement;
    rect = elem.getBoundingClientRect();
    this.guide1.menu[3].cx = rect.left + rect.width / 2;
    this.guide1.menu[3].cy = rect.top + rect.height / 2 - 5;

    elem = this.menuPrescriptionElem.nativeElement;
    rect = elem.getBoundingClientRect();
    this.guide1.menu[4].cx = rect.left + rect.width / 2;
    this.guide1.menu[4].cy = rect.top + rect.height / 2 - 5;

    // ?????????????????? ?????? ??????
    this.courseCards.toArray().forEach(card => {
      if (card.name == RelaxTraining.name) {
        elem = card.el.nativeElement;
        rect = elem.getBoundingClientRect();
        this.guide2.relaxRect = { x: rect.x, y: rect.y, width: rect.width, height: rect.height, rx: 8, ry: 0 };
      }
    });
  }

}
