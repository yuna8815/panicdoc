import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { EmotionDiaryDef } from 'src/smd-common';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
})
export class DiaryComponent implements OnInit {

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

  constructor(public route: ActivatedRoute, private router: Router, public auth: AuthService, public context: GlobalContextService) {
  }

  ngOnInit() {}

  onWeekSelected(week: number) {

  }

  dayText(day: number) {
    return moment(this.dateStart).add(day, 'days').toDate();
  }

  gotoWrite(item: EmotionDiaryDef) {
    this.router.navigate(['/home/diary-write']);
  }
}
