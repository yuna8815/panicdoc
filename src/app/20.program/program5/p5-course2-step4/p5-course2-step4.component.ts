import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'p5-course2-step4',
  templateUrl: './p5-course2-step4.component.html',
  styleUrls: ['./p5-course2-step4.component.scss'],
})
export class P5Course2Step4Component implements OnInit {

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
