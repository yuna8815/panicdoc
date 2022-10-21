import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { messages } from 'src/messages';
import { PanicFactors } from 'src/smd-common';

@Component({
  selector: 'panic-log-write-step1',
  templateUrl: './panic-log-write-step1.component.html',
  styleUrls: ['./panic-log-write-step1.component.scss'],
})
export class PanicLogWriteStep1Component implements OnInit {

  checked = _.clone(PanicFactors);
  panicFactors;

  constructor() {
    this.panicFactors = Object.keys(this.checked);
  }

  ngOnInit() {}

}
