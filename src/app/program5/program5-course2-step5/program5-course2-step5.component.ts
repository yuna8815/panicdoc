import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { DistortionEventOptions } from '../program5-course2-step4/program5-course2-step4.component';

@Component({
  selector: 'program5-course2-step5',
  templateUrl: './program5-course2-step5.component.html',
  styleUrls: ['./program5-course2-step5.component.scss'],
})
export class Program5Course2Step5Component implements OnInit {

  DistortionEventOptions = DistortionEventOptions;

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
