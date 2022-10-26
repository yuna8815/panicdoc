import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { toHHmmss } from 'src/app/lib/timeutils';
import { ExposureTrainingRecord, GradeLabels2 } from 'src/smd-common';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  selected: ExposureTrainingRecord = {
    icon: 'icon7',
    name: '머리 숙였다 들기',
    date: new Date(),
    complete: false,
    duration: 1615,
    similarity: 40,
    thought: '',
    behavior: '',
    symptoms: ['땀흘림', '토할 것 같은 느낌 혹은 복부 불편감', '비현실감 또는 이인증'],
  }
  toHHmmss = toHHmmss;
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
