import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'p5-course1-step1',
  templateUrl: './p5-course1-step1.component.html',
  styleUrls: ['./p5-course1-step1.component.scss'],
})
export class P5Course1Step1Component implements OnInit {

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
