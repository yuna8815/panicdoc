import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmotionDiaryDef, TimeFormat_MMdd_e } from 'src/smd-common';

@Component({
  selector: 'app-diary-view',
  templateUrl: './diary-view.page.html',
  styleUrls: ['./diary-view.page.scss'],
})
export class DiaryViewPage implements OnInit {

  item: EmotionDiaryDef = {
    date: new Date(2022, 7 - 1, 8),
    scores: {
      anxiety: 0,
      sadness: 0,
      control: 4,
    },
  }
  TimeFormat_MMdd_e = TimeFormat_MMdd_e;

  constructor(
    public ls: LocationStrategy
  ) { }

  ngOnInit() {
  }

  backHome() {
    this.ls.historyGo(-1)
  }

}
