import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepBase } from '../step-base';

@Component({
  selector: 'app-my-panic-factors',
  templateUrl: './my-panic-factors.page.html',
  styleUrls: ['./my-panic-factors.page.scss'],
})
export class MyPanicFactorsPage implements OnInit {

  course = 1;
  step = 1;
  total = 12;
  home = 3;
  StepsPerCourse = [3, 1]
  Courses = [
    '나의 공황 촉발 요인',
    '공황평가(PDSS,APPQ)',
  ];

  @ViewChild('stepContent', { static: false }) stepContent: StepBase;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.route.data.subscribe(data => {
      this.course = data.course;
      this.total = this.StepsPerCourse[this.course - 1];
    });

    this.route.params.subscribe(params => {
      this.step = +(params['step'] || 1);
    });

    this.route.queryParams.subscribe(params => {
      this.home = +params.home || 3;
    });
  }

  ngOnInit() {
  }

  backHome() {
    this.router.navigateByUrl(`/home?program=${this.home}`);
  }

  back() {
    if (this.step == 1) {
      return `/home?program=${this.home}`;
    }
    return `/my-panic-factors/factors/1`;
  }

  next() {
    this.stepContent?.next?.();
    // if (this.step == 2) {
    //   this.router.navigateByUrl(`/home?program=${this.home}`);
    //   return;
    // }
    if (this.step == 1) {
      this.router.navigateByUrl(`/my-panic-factors/factors/2`);
    } else if (this.step == 2) {
      this.router.navigateByUrl(`/my-panic-factors/factors/1`);
    }
  }

  getButtonText() {
    if (this.step == 1) {
      return '<img class="absolute left-0" src="/assets/icon/footer_diary.svg">수정하기';
    }
    return `완료`;
  }

}
