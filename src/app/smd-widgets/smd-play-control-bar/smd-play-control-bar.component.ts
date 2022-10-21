import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smd-play-control-bar',
  templateUrl: './smd-play-control-bar.component.html',
  styleUrls: ['./smd-play-control-bar.component.scss'],
})
export class SmdPlayControlBarComponent implements OnInit {

  isPlaying = false;

  constructor() { }

  ngOnInit() {}

  play() {
    this.isPlaying = true;
  }

  pause() {
    this.isPlaying = false;
  }
}
