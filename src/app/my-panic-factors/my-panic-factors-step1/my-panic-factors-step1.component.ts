import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'my-panic-factors-step1',
  templateUrl: './my-panic-factors-step1.component.html',
  styleUrls: ['./my-panic-factors-step1.component.scss'],
})
export class MyPanicFactorsStep1Component implements OnInit {

  factors;
  factorKinds;

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {
    this.factors = _.clone(this.context.myPanicFactors);
    this.factorKinds = Object.keys(this.context.myPanicFactors).filter(ft => this.context.myPanicFactors[ft]);
  }

}
