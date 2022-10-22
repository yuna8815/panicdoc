import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';

@Component({
  selector: 'app-prescription-view',
  templateUrl: './prescription-view.page.html',
  styleUrls: ['./prescription-view.page.scss'],
})
export class PrescriptionViewPage implements OnInit {

  step = '1';
  prescriptionDetail = Math.random() < .5 ? 1 : 2;

  constructor(public route: ActivatedRoute, private router: Router, public auth: AuthService, public context: GlobalContextService) {
  }

  ngOnInit() {
    this.step = '1';
  }

  backToDiary() {
    this.router.navigate(['/home/diary']);
  }

  next() {
    if (this.step == '1') {
      this.step = '2';
    } else if (this.step == '2') {
      this.router.navigate(['/home/diary']);
    }
  }
}
