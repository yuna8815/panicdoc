import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panic-result',
  templateUrl: './panic-result.page.html',
  styleUrls: ['./panic-result.page.scss'],
})
export class PanicResultPage implements OnInit {

  constructor(
    public ls: LocationStrategy
  ) { }

  ngOnInit() {
  }

  back() {
    this.ls.historyGo(-1)
  }

}
