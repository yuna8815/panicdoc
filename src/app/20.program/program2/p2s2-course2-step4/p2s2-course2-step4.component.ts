import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'p2s2-course2-step4',
  templateUrl: './p2s2-course2-step4.component.html',
  styleUrls: ['./p2s2-course2-step4.component.scss'],
})
export class P2s2Course2Step4Component implements OnInit {

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
