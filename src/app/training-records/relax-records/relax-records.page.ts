import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relax-records',
  templateUrl: './relax-records.page.html',
  styleUrls: ['./relax-records.page.scss'],
})
export class RelaxRecordsPage implements OnInit {

  week = 3;

  constructor() { }

  ngOnInit() {
  }

  onClickWeek(w: number) {
    this.week = w;
  }
}
