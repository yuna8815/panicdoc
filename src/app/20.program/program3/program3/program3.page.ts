import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program3',
  templateUrl: './program3.page.html',
  styleUrls: ['./program3.page.scss'],
})
export class Program3Page implements OnInit {

  course = 1;
  step = 1;
  total = 12;
  Courses = [
    '이완훈련이 왜 필요할까요?',
    '복식호흡 배우기',
    '점진적 근육이완 배우기',
    '이완훈련 하기',
  ];
  home = 3;
  StepsPerCourse = [3, 4, 2, 1]

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
    return `program${this.home}/${this.route.snapshot.url.slice(0, -1).join('/')}/${this.step - 1}`;
  }

  next() {
    this.stepContent?.next?.();
    if (this.step == this.StepsPerCourse[this.course - 1]) {
      this.router.navigateByUrl(`/home?program=${this.home}`);
      return;
    }
    this.router.navigate(['..', '' + (this.step + 1)], {
      relativeTo: this.route,
    });
  }

  getButtonText() {
    if (this.step == this.StepsPerCourse[this.course - 1]) {
      return '완료';
    }
    return `다음(${ this.step }/${ this.total })`;
  }

  showHeader() {
    return this.course == 4 && this.step == 1 ? false : true;
  }
}
