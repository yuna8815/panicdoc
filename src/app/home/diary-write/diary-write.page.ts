import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { EmotionDiaryDef, GradeLabels2, TimeFormat_MMdd_e } from 'src/smd-common';

@Component({
  selector: 'app-diary-write',
  templateUrl: './diary-write.page.html',
  styleUrls: ['./diary-write.page.scss'],
})
export class DiaryWritePage implements OnInit {

  step = '1';
  item: EmotionDiaryDef = {
    date: new Date(),
    scores: {}
  }
  scoreLabels = GradeLabels2;
  TimeFormat_MMdd_e = TimeFormat_MMdd_e;

  constructor(public route: ActivatedRoute, private router: Router, public auth: AuthService, public context: GlobalContextService) {
  }

  ngOnInit() {
  }

  backToDiary() {
    this.router.navigate(['/home/diary']);
  }

  next() {
    if (this.step == '1') {
      this.step = '2';
    } else if (this.step == '2') {
      this.step = 'confirm';
    }
  }
}
