import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'p2-course2-step5',
  templateUrl: './p2-course2-step5.component.html',
  styleUrls: ['./p2-course2-step5.component.scss'],
})
export class P2Course2Step5Component implements OnInit {

  constructor(public auth: AuthService, public context: GlobalContextService) { }

  ngOnInit() {}

}
