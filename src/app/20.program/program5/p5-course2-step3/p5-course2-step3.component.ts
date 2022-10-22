import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { SmdButtonAnswerComponent } from 'src/app/00.component/smd-button-answer/smd-button-answer.component';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'p5-course2-step3',
  templateUrl: './p5-course2-step3.component.html',
  styleUrls: ['./p5-course2-step3.component.scss'],
})
export class P5Course2Step3Component implements OnInit {

  @ViewChild('q1', { static: true }) q1: SmdButtonAnswerComponent;
  @ViewChild('q2', { static: true }) q2: SmdButtonAnswerComponent;
  @ViewChild('q3', { static: true }) q3: SmdButtonAnswerComponent;
  @ViewChild('q4', { static: true }) q4: SmdButtonAnswerComponent;

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

  next = () => {
    this.context.p5.course2.step3answer_allNo =
      (!this.q1.answer && !this.q2.answer && !this.q3.answer && !this.q4.answer);
  }

}
