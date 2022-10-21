import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'p2-course1-step2',
  templateUrl: './p2-course1-step2.component.html',
  styleUrls: ['./p2-course1-step2.component.scss'],
})
export class P2Course1Step2Component implements OnInit {

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
