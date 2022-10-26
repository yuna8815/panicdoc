import { LocationStrategy } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { EmotionDiaryDef, GradeLabels2, TimeFormat_MMdd_e } from 'src/smd-common';

@Component({
  selector: 'app-diary-write',
  templateUrl: './diary-write.page.html',
  styleUrls: ['./diary-write.page.scss'],
})
export class DiaryWritePage implements OnInit {
  /*
   !TODO
   감정일기 점수 0~8까지로 수정되어야함.
  */

  @ViewChild('slides') slides: IonSlides;

  step;
  total;
  btnMsg: string = '다음';
  isEnd: boolean = false;

  item: EmotionDiaryDef = {
    date: new Date(),
    scores: {}
  }
  scoreLabels = GradeLabels2;
  TimeFormat_MMdd_e = TimeFormat_MMdd_e;

  constructor(
    public route: ActivatedRoute,
    public auth: AuthService,
    public context: GlobalContextService,
    public ls: LocationStrategy
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getActiveIndex();
    this.slides.length().then(idx => this.total = idx)
  }

  getActiveIndex() {
    this.slides.getActiveIndex().then(idx => {
      this.step = idx + 1
    })
  }

  backHome() {
    this.ls.historyGo(-1)
  }

  back() {
    this.slides.slidePrev();
    this.getActiveIndex();
    this.btnMsg = '다음'
  }
  next() {
    if(this.isEnd) this.backHome();
    this.slides.slideNext()
    this.getActiveIndex();
    this.slides.isEnd().then(v => {
      if(v) {
        this.btnMsg = '작성완료'
        this.isEnd = true
      }
      else this.isEnd = false
    })
  }
}
