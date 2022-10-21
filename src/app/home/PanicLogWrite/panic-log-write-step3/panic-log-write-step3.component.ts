import { Component, OnInit } from '@angular/core';
import { Symptoms } from 'src/smd-common';

@Component({
  selector: 'panic-log-write-step3',
  templateUrl: './panic-log-write-step3.component.html',
  styleUrls: ['./panic-log-write-step3.component.scss'],
})
export class PanicLogWriteStep3Component implements OnInit {

  checked = Symptoms.reduce((obj, s) => { obj[s] = false; return obj; }, {});
  symptoms;

  constructor() {
    this.symptoms = Object.keys(this.checked);
  }

  ngOnInit() {}

}
