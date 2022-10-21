import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program5',
  templateUrl: './program5.page.html',
  styleUrls: ['./program5.page.scss'],
})
export class Program5Page implements OnInit {

  course = 1;
  step = 1;
  total = 12;
  Courses = [
    '두려운 생각 다스리기',
    '스스로 인지왜곡 찾고 바로잡기 1',
    '스스로 인지왜곡 찾고 바로잡기 2',
    '스스로 인지왜곡 찾고 바로잡기 3',
    '이완훈련 하기'
  ];
  home = 5;
  StepsPerCourse = [6, 6, 7, 6]
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
      this.home = +params.home || 5;
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
    if (this.step == 0) {
      return '시작하기';
    }
    return `${this.step == this.StepsPerCourse[this.course - 1] ? '완료' : '다음'}(${ this.step }/${ this.total })`;
  }

}
