import { Component, OnInit } from '@angular/core';
import { EmotionDiaryDef } from 'src/smd-common';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit {

  dateStart = new Date(2022, 7 - 1, 4);
  diaryItems: EmotionDiaryDef[] = [
    {
      date: new Date(2022, 7 - 1, 4),
      scores: {
        anxiety: 0,
        sadness: 0,
        control: 4,
      },
    },
    {
      date: new Date(2022, 7 - 1, 5),
    },
    {
      date: new Date(2022, 7 - 1, 6),
      scores: {
        anxiety: 0,
        sadness: 0,
        control: 4,
      },
    },
    {
      date: new Date(2022, 7 - 1, 7),
      scores: {
        anxiety: 0,
        sadness: 0,
        control: 4,
      },
    },
    {
      date: new Date(2022, 7 - 1, 8),
      scores: {
        anxiety: 0,
        sadness: 0,
        control: 4,
      },
    },
    {
      date: new Date(2022, 7 - 1, 9),
    },
    {
      date: new Date(2022, 7 - 1, 10),
      scores: {
        anxiety: 0,
        sadness: 0,
        control: 4,
      },
    },
  ];

  moment = moment;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  dayText(day: number) {
    return moment(this.dateStart).add(day, 'days').toDate();
  }

  gotoWrite(item: EmotionDiaryDef) {
    if(!item.scores) this.router.navigate(['/diary/diary-write']);
    else this.router.navigate(['/diary/diary-view']);
  }

}
