import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalContextService } from 'src/app/global-context.service';
import { toHHmmss } from 'src/app/lib/timeutils';
import { ExposureTrainingRecord, GradeLabels2 } from 'src/smd-common';

@Component({
  selector: 'app-exposure-records',
  templateUrl: './exposure-records.page.html',
  styleUrls: ['./exposure-records.page.scss'],
})
export class ExposureRecordsPage implements OnInit {

  records: ExposureTrainingRecord[] = [
    {
      icon: 'icon7',
      name: '머리 숙였다 들기',
      date: new Date(),
      complete: false,
      duration: 1615,
      similarity: 40,
      thought: '',
      behavior: '',
      symptoms: ['땀흘림', '토할 것 같은 느낌 혹은 복부 불편감', '비현실감 또는 이인증'],
    },
    {
      icon: 'icon7',
      name: '머리 숙였다 들기',
      date: new Date(),
      complete: false,
      duration: 1615,
      similarity: 40,
      thought: '',
      behavior: '',
    },
    {
      icon: 'icon7',
      name: '머리 숙였다 들기',
      date: new Date(),
      complete: false,
      duration: 1615,
      similarity: 40,
      thought: '',
      behavior: '',
    },
    {
      icon: 'icon7',
      name: '머리 숙였다 들기',
      date: new Date(),
      complete: true,
      duration: 1615,
      similarity: 40,
      thought: '',
      behavior: '',
    },
  ];
  selected: ExposureTrainingRecord;

  toHHmmss = toHHmmss;
  GradeLabels2 = GradeLabels2;

  constructor(public router: Router, public context: GlobalContextService) { }

  ngOnInit() {
  }

  selectRecord(record: ExposureTrainingRecord) {
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
