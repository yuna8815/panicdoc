import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/global-context.service';
import { StepBase } from 'src/app/step-base';
import { NameValue } from 'src/collection';

@Component({
  selector: 'program4-course2-step11',
  templateUrl: './program4-course2-step11.component.html',
  styleUrls: ['./program4-course2-step11.component.scss'],
})
export class Program4Course2Step11Component implements OnInit, StepBase {

  constructor(public context: GlobalContextService) { }

  ngOnInit() {
  }

  nextDisabled = () => {
    return false;
  }
}
