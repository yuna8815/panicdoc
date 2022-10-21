import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { toHHmmss } from 'src/app/lib/timeutils';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program6-course3-step3',
  templateUrl: './program6-course3-step3.component.html',
  styleUrls: ['./program6-course3-step3.component.scss'],
})
export class Program6Course3Step3Component implements OnInit, OnDestroy, StepBase {

  elapsed = 0;

  started = false;
  paused = false;
  timer;

  toHHmmss = toHHmmss;

  constructor(public auth: AuthService, public context: GlobalContextService, public router: Router) { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.elapsed++;
    }, 1000)
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  hideNext = () => true;

  start() {
    this.started = true;
    this.paused = false;
  }

  pause() {
    this.paused = true;
  }

  finish() {
    this.router.navigate(['/program6/course3/4']);
  }

  giveup() {

  }

  front() {
    this.router.navigate(['/program6/course3/1']);
  }
}
