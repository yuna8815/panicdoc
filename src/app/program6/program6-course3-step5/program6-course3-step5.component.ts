import { Component, OnInit } from '@angular/core';
import { Symptoms } from 'src/smd-common';

@Component({
  selector: 'program6-course3-step5',
  templateUrl: './program6-course3-step5.component.html',
  styleUrls: ['./program6-course3-step5.component.scss'],
})
export class Program6Course3Step5Component implements OnInit {

  checked = Symptoms.reduce((obj, s) => { obj[s] = false; return obj; }, {});
  symptoms;

  constructor() {
    this.symptoms = Object.keys(this.checked);
  }

  ngOnInit() {}

}
