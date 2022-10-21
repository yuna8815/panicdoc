import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smd-overlay-guide',
  templateUrl: './smd-overlay-guide.component.html',
  styleUrls: ['./smd-overlay-guide.component.scss'],
})
export class SmdOverlayGuideComponent implements OnInit {

  showGuide = true;

  constructor() { }

  ngOnInit() {}

  closeGuide() {
    this.showGuide = false;
  }

}
