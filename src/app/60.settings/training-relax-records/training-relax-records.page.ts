import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-relax-records',
  templateUrl: './training-relax-records.page.html',
  styleUrls: ['./training-relax-records.page.scss'],
})
export class TrainingRelaxRecordsPage implements OnInit {

  week = 3;

  constructor(
    public ls: LocationStrategy
  ) { }

  ngOnInit() {
  }

  onClickWeek(w: number) {
    this.week = w;
  }
  back() {
    this.ls.historyGo(-1)
  }
}
