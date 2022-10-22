import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { PanicLogItem, TimeFormat_MMdd_e } from 'src/smd-common';

@Component({
  selector: 'panic-logs',
  templateUrl: './panic-logs.component.html',
  styleUrls: ['./panic-logs.component.scss'],
})
export class PanicLogsComponent implements OnInit {

  itemsPerDay: {
    date: Date;
    items: PanicLogItem[];
  }[] = [
    {
      date: new Date(2022, 7 - 1, 4),
      items: [
        {
          time: new Date(2022, 7 - 1, 4, 14, 12),
        },
        {
          time: new Date(2022, 7 - 1, 4, 10, 55),
        },
      ],
    },
    {
      date: new Date(2022, 7 - 1, 5),
      items: [
        {
          time: new Date(2022, 7 - 1, 5, 15, 11),
        },
      ],
    },
  ];

  TimeFormat_MMdd_e = TimeFormat_MMdd_e;

  constructor(public route: ActivatedRoute, private router: Router, public auth: AuthService, public context: GlobalContextService,
    public popoverController: PopoverController) {
  }

  ngOnInit() {}

  gotoWrite() {
    this.router.navigate(['/home/panic-log-write/0']);
  }

  editItem(item: PanicLogItem) {
    this.popoverController.dismiss();
    this.router.navigate(['/home/panic-log-write/0']);
  }

  deleteItem(item: PanicLogItem) {
  }

}
