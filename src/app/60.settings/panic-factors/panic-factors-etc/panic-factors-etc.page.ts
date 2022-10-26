import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panic-factors-etc',
  templateUrl: './panic-factors-etc.page.html',
  styleUrls: ['./panic-factors-etc.page.scss'],
})
export class PanicFactorsEtcPage implements OnInit {

  constructor(
    public ls: LocationStrategy
  ) { }

  ngOnInit() {
  }

  back() {
    this.ls.historyGo(-1)
  }

  doSave() {
    this.back()
  }

}
