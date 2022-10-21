import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepBase } from '../step-base';

@Component({
  selector: 'p2s2',
  templateUrl: './p2s2.page.html',
  styleUrls: ['./p2s2.page.scss'],
})
export class P2s2Page implements OnInit {

  course = 1;
  step = 1;
  total = 12;
  Courses = [
    '감정일기 작성은 치료의 핵심입니다',
    '나를 관찰하며 인지왜곡 찾기',
    '이완훈련 하기'
  ];
  home = 'p2_2';
  StepsPerCourse = [4, 7, 4]

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
      this.home = params.home || 'p2_2';
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
    return `${this.home}/${this.route.snapshot.url.slice(0, -1).join('/')}/${this.step - 1}`;
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
