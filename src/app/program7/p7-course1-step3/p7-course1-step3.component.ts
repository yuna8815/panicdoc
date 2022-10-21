import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'p7-course1-step3',
  templateUrl: './p7-course1-step3.component.html',
  styleUrls: ['./p7-course1-step3.component.scss'],
})
export class P7Course1Step3Component implements OnInit {

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
