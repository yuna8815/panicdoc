import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DailyExposureTrainingRecord, GradeLabels2 } from 'src/smd-common';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  selected: DailyExposureTrainingRecord = {
    name: '운전하기',
    description: '1단계 : 가까운 곳 한 바퀴 돌기 (지인과 함께)',
    symptoms: ['땀흘림', '토할 것 같은 느낌 혹은 복부 불편감', '비현실감 또는 이인증'],
    date: new Date(),
  }
  GradeLabels2 = GradeLabels2;

  constructor(
    public ls: LocationStrategy
  ) { }

  ngOnInit() {
  }

  back() {
    this.ls.historyGo(-1)
  }

}
