import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { PanicLogItem } from 'src/smd-common';

@Component({
  selector: 'program4-course3-intro2',
  templateUrl: './program4-course3-intro2.component.html',
  styleUrls: ['./program4-course3-intro2.component.scss'],
})
export class Program4Course3Intro2Component implements OnInit {

  item: PanicLogItem = {
    time: new Date(),
    triggerFactor: '버스를 이용할 때',
    symptom: '땀흘림, 토할 것 같은 느낌 혹은 복부 불편감, 비현실감 또는 이인증',
    thought: '',
    behavior: '버스에서 내렸습니다.',
  };

  constructor(public auth: AuthService) {}

  ngOnInit() {}

}
