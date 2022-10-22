import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program6-course3-step2',
  templateUrl: './program6-course3-step2.component.html',
  styleUrls: ['./program6-course3-step2.component.scss'],
})
export class Program6Course3Step2Component implements OnInit, StepBase {

  constructor(public auth: AuthService, public context: GlobalContextService, private router: Router) {
  }

  ngOnInit() {}

  front = () => {
    this.router.navigate(['/program6/course3/1']);
  }

}
