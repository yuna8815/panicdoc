import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { PrescriptionDef, TimeFormat_MMdd_e, TimeFormat_yyyyMMdd_e } from 'src/smd-common';


@Component({
  selector: 'app-weekly-prescription',
  templateUrl: './weekly-prescription.component.html',
  styleUrls: ['./weekly-prescription.component.scss'],
})
export class WeeklyPrescriptionComponent implements OnInit {

  prescriptions: PrescriptionDef[] = [
    {
      name: '2주차',
      period: [
        new Date(2022, 7 - 1, 11),
        new Date(2022, 7 - 1, 17),
      ],
      scores: {
        anxiety: 3,
        sadness: 4,
        control: 5,
      },
    },
    {
      name: '3주차',
      period: [
        new Date(2022, 7 - 1, 18),
        new Date(2022, 7 - 1, 24),
      ],
      scores: {
        anxiety: 3,
        sadness: 4,
        control: 5,
      },
    },
  ]

  TimeFormat_MMdd_e = TimeFormat_MMdd_e;

  constructor(public route: ActivatedRoute, private router: Router, public auth: AuthService, public context: GlobalContextService) {
  }

  ngOnInit() {}

  gotoDetails(prescription: PrescriptionDef) {
    this.router.navigate(['/home/prescription-view']);
  }

}
