import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { DistortionEvent3Options } from '../program5-course3-step6/program5-course3-step6.component';

@Component({
  selector: 'program5-course3-step7',
  templateUrl: './program5-course3-step7.component.html',
  styleUrls: ['./program5-course3-step7.component.scss'],
})
export class Program5Course3Step7Component implements OnInit {

  DistortionEvent3Options = DistortionEvent3Options;

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
