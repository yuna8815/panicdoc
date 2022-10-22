import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'p7',
  templateUrl: './p7.page.html',
  styleUrls: ['./p7.page.scss'],
})
export class P7Page implements OnInit {

  course = 1;
  step = 1;
  total = 12;
  Courses = [
    '노출훈련의 중요성',
    '나의 공황에 대한 인지 재구성 ',
    '이완훈련 하기'
  ];
  home = 'p7';
  StepsPerCourse = [5, 12, 4]

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
      this.home = params.home || 'p7';
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

  getButtonText() {
    return '다음'
  }
}
