import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'program1',
  templateUrl: './program1.page.html',
  styleUrls: ['./program1.page.scss'],
})
export class Program1Page implements OnInit {

  course = 1;
  step = 1;
  total = 12;
  home = 1;
  Courses = [
    '공황장애 이해하기',
    'Quiz : 공황장애 바로 알기',
  ];
  StepsPerCourse = [9, 21]

  constructor(private route: ActivatedRoute, private router: Router) {

    this.route.data.subscribe(data => {
      this.course = data.course;
      this.total = this.StepsPerCourse[this.course - 1];
    });

    this.route.params.subscribe(params => {
      this.step = +(params['step'] || 1);
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

  isVoiceSupported() {
    return this.course == 1;
  }
}
