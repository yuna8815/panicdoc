import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DailyExposureTrainingRecord } from 'src/smd-common';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  records: DailyExposureTrainingRecord[] = [
    {
      name: '운전하기',
      description: '1단계 : 가까운 곳 한 바퀴 돌기 (지인과 함께)',
      symptoms: ['땀흘림', '토할 것 같은 느낌 혹은 복부 불편감', '비현실감 또는 이인증'],
      date: new Date(),
    },
    {
      name: '운전하기',
      description: '1단계 : 가까운 곳 한 바퀴 돌기 (지인과 함께)',
      symptoms: ['땀흘림', '토할 것 같은 느낌 혹은 복부 불편감', '비현실감 또는 이인증'],
      date: new Date(),
    },
  ];

  constructor(
    public router: Router,
    public ls: LocationStrategy
  ) { }

  ngOnInit() {
  }

  selectRecord(record: DailyExposureTrainingRecord) {
    this.router.navigateByUrl('/settings/training-daily-records/view')
  }

  back() {
    this.ls.historyGo(-1)
  }

}
