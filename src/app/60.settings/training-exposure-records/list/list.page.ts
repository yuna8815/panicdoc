import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { toHHmmss } from 'src/app/lib/timeutils';
import { ExposureTrainingRecord } from 'src/smd-common';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

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

  constructor(
    public router: Router,
    public ls: LocationStrategy
  ) { }

  ngOnInit() {
  }

  selectRecord(record: ExposureTrainingRecord) {
    this.router.navigateByUrl('/settings/training-exposure-records/view')
    this.selected = record;
  }

  back() {
    this.ls.historyGo(-1)
  }

}
