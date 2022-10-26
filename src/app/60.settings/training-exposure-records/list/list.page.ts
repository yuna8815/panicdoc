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

  toHHmmss = toHHmmss;

  constructor(
    public router: Router,
    public ls: LocationStrategy
  ) { }

  ngOnInit() {
  }

  selectRecord() {
    this.router.navigateByUrl('/settings/training-exposure-records/view')
  }

  back() {
    this.ls.historyGo(-1)
  }

}
