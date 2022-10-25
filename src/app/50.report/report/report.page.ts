import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrescriptionDef, TimeFormat_MMdd_e } from 'src/smd-common';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

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

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  gotoDetails(prescription: PrescriptionDef) {
    this.router.navigate(['/home/prescription-view']);
  }

}
