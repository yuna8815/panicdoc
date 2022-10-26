import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panic-factors-select',
  templateUrl: './panic-factors-select.page.html',
  styleUrls: ['./panic-factors-select.page.scss'],
})
export class PanicFactorsSelectPage implements OnInit {

  factors;
  factorKinds;

  constructor(
    public ls: LocationStrategy,
    public context: GlobalContextService,
    public router: Router
  ) { }

  ngOnInit() {
    this.factors = _.clone(this.context.myPanicFactors);
    this.factorKinds = Object.keys(this.context.myPanicFactors);
  }

  clicked(ev) {
    if(ev.text == '기타 (직접 입력)') this.router.navigateByUrl('/settings/panic-factors/panic-factors-etc')
  }

  back() {
    this.ls.historyGo(-1)
  }

  doSave() {
    this.back();
  }

}
