import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program8',
  templateUrl: './program8.page.html',
  styleUrls: ['./program8.page.scss'],
})
export class Program8Page implements OnInit {

  course = 1;
  step = 1;
  total = 12;
  Courses = [
    'AAA',
    '인지행동치료 최종 리포트',
    '나의 훈련 계획 세우기',
    '인지행동치료를 마치며',
  ];
  home = 8;
  StepsPerCourse = [7, 2, 7, 5]
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
      this.home = +params.home || 8;
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
    if (this.step == this.StepsPerCourse[this.course - 1]) {
      this.router.navigateByUrl(`/home?program=${this.home}`);
      return;
    }
    this.router.navigate(['..', '' + (this.step + 1)], {
      relativeTo: this.route,
    });
  }

  gotoPlan() {
    this.router.navigate([`/program8/course3`]);
  }

  getButtonText() {
    return `${this.step == this.StepsPerCourse[this.course - 1] ? '완료' : '다음'}(${ this.step }/${ this.total })`;
  }
}
