import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SmdRadioComponent } from '../smd-radio/smd-radio.component';

@Component({
  selector: 'smd-button-answer',
  templateUrl: './smd-button-answer.component.html',
  styleUrls: ['./smd-button-answer.component.scss'],
})
export class SmdButtonAnswerComponent implements OnInit {

  @Input() yesText = '예';
  @Input() noText = '아니오';
  @ViewChild('radio', { static: true }) radio: SmdRadioComponent;

  get answer() {
    return this.radio.selected == 'Y';
  }

  constructor() { }

  ngOnInit() {}

}
