import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import * as _ from 'lodash';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panic-factors',
  templateUrl: './panic-factors.page.html',
  styleUrls: ['./panic-factors.page.scss'],
})
export class PanicFactorsPage implements OnInit {

  factors;
  factorKinds;

  constructor(
    public auth: AuthService,
    public context: GlobalContextService,
    public ls: LocationStrategy,
    public router: Router
  ) { }

  ngOnInit() {
    this.factors = _.clone(this.context.myPanicFactors);
    this.factorKinds = Object.keys(this.context.myPanicFactors).filter(ft => this.context.myPanicFactors[ft]);
  }

  back() {
    this.ls.historyGo(-1)
  }

  doEdit() {
    this.router.navigateByUrl('/settings/panic-factors/panic-factors-select')
  }

}
