import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { DistortionEvent2Options } from '../program5-course3-step4/program5-course3-step4.component';

@Component({
  selector: 'program5-course3-step5',
  templateUrl: './program5-course3-step5.component.html',
  styleUrls: ['./program5-course3-step5.component.scss'],
})
export class Program5Course3Step5Component implements OnInit {

  DistortionEvent2Options = DistortionEvent2Options;

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

  getSelectedText() {
    return this.context.program5.course3.step4answer?.[0];
  }
}
