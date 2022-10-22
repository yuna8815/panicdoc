import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { processNext, StepBase } from 'src/app/step-base';

@Component({
  selector: 'panic-log-write',
  templateUrl: './panic-log-write.page.html',
  styleUrls: ['./panic-log-write.page.scss'],
})
export class PanicLogWritePage implements OnInit {

  step = 0;
  title = '언제 증상이 일어났나요?';
  time: Date;

  @ViewChild('stepContent', { static: false }) stepContent: StepBase;

  constructor(public route: ActivatedRoute, private router: Router, public auth: AuthService, public context: GlobalContextService) {
    this.route.params.subscribe(params => {
      this.step = +(params['step'] || 0);
    });
  }

  ngOnInit() {
  }

  back = () => {
    this.router.navigate(['/home/paniclogs']);
  }

  backHome() {
    this.router.navigate(['/home/paniclogs']);
  }

  async next() {
    if (!(await processNext(this.stepContent))) {
      return;
    }
    if (this.step == 5) {
      this.router.navigate(['/home/paniclogs']);
      return;
    }
    this.router.navigate(['..', '' + (this.step + 1)], {
      relativeTo: this.route,
    });
  }

}
