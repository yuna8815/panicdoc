import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'my-panic-factors-step2',
  templateUrl: './my-panic-factors-step2.component.html',
  styleUrls: ['./my-panic-factors-step2.component.scss'],
})
export class MyPanicFactorsStep2Component implements OnInit, StepBase {

  factors;
  factorKinds;

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {
    this.factors = _.clone(this.context.myPanicFactors);
    this.factorKinds = Object.keys(this.context.myPanicFactors);
  }

  next = () => {
    this.context.myPanicFactors = this.factors;
    return true;
  }

}
