import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PanicLogItem, TimeFormat_MMdd_e } from 'src/smd-common';

@Component({
  selector: 'app-paniclogs',
  templateUrl: './paniclogs.page.html',
  styleUrls: ['./paniclogs.page.scss'],
})
export class PaniclogsPage implements OnInit {

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

  constructor(
    public router: Router,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

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
