import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program7',
  templateUrl: './program7.page.html',
  styleUrls: ['./program7.page.scss'],
})
export class Program7Page implements OnInit {

  course = 1;
  step = 1;
  total = 12;
  Courses = {
    1: '일상활동 노출훈련',
    2: '일상활동 노출훈련 계획하기',
    3: '일상활동 노출훈련 하기',
    4: '이완훈련 하기',
    8: '일상활동 노출훈련 수정하기',
  };
  home = 7;
  StepsPerCourse = {
    1: 7,
    2: 4,
    3: 5,
    4: 6,
    8: 1,
  }

  @ViewChild('stepContent', { static: false }) stepContent: StepBase;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.route.data.subscribe(data => {
      this.course = data.course;
      this.total = this.StepsPerCourse[this.course];
    });

    this.route.params.subscribe(params => {
      this.step = +(params['step'] || 1);
    });

    this.route.queryParams.subscribe(params => {
      this.home = +params.home || 7;
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
    return `program${this.home}/${this.route.snapshot.url.slice(0, -1).join('/')}/${this.step - 1}`;
  }

  next() {
    if (this.stepContent?.next?.() === false) {
      return false;
    }
    if (this.step == this.StepsPerCourse[this.course]) {
      this.router.navigateByUrl(`/home?program=${this.home}`);
      return;
    }
    this.router.navigate(['..', '' + (this.step + 1)], {
      relativeTo: this.route,
    });
  }

}
