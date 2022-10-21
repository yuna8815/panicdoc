import { Component, OnInit } from '@angular/core';
import { GradeLabels2 } from 'src/smd-common';

@Component({
  selector: 'panic-log-write-step2',
  templateUrl: './panic-log-write-step2.component.html',
  styleUrls: ['./panic-log-write-step2.component.scss'],
})
export class PanicLogWriteStep2Component implements OnInit {

  GradeLabels2 = GradeLabels2;

  constructor() { }

  ngOnInit() {}

}
