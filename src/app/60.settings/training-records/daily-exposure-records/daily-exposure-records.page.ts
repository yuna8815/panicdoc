import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';
import { toHHmmss } from 'src/app/lib/timeutils';
import { DailyExposureTrainingRecord, GradeLabels2 } from 'src/smd-common';

@Component({
  selector: 'app-daily-exposure-records',
  templateUrl: './daily-exposure-records.page.html',
  styleUrls: ['./daily-exposure-records.page.scss'],
})
export class DailyExposureRecordsPage implements OnInit {

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
  selected: DailyExposureTrainingRecord;

  toHHmmss = toHHmmss;
  GradeLabels2 = GradeLabels2;

  constructor(public context: GlobalContextService) { }

  ngOnInit() {
  }

  selectRecord(record: DailyExposureTrainingRecord) {
    this.selected = record;
  }

  back = () => {
    if (this.selected) {
      this.selected = null;
    } else {
      this.context.gotoHome();
    }
  }
}
