import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program4',
  templateUrl: './program4.page.html',
  styleUrls: ['./program4.page.scss'],
})
export class Program4Page implements OnInit {

  course = 1;
  step = 1;
  total = 12;
  Courses = [
    '공황과 나의 생각',
    '인지왜곡 찾기',
    '나의 공황에서 인지왜곡 찾기',
    '이완훈련 하기',
  ];
  home = 4;
  StepsPerCourse = [5, 14, 11, 6]
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
      this.home = +params.home || 4;
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
    if (this.course == 3) {
      if (this.step == 1) {
        return '나의 최근 공황 확인하기';
      } else if (this.step == 2 || this.step == 3) {
        return '공황 분석하기';
      } else {
        return `다음(${ this.step - 3 }/${ this.total - 3 })`;
      }
    }
    return `${this.step == this.StepsPerCourse[this.course - 1] ? '완료' : '다음'}(${ this.step }/${ this.total })`;
  }

  isVoiceSupported() {
    if (this.course == 1) {
      return true;
    }
    if (this.course == 2 && (this.step >= 1 && this.step <= 5)) {
      return true;
    }
    return false;
  }

}
