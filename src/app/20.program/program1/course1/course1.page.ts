import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-course1',
  templateUrl: './course1.page.html',
  styleUrls: ['./course1.page.scss'],
})
export class Course1Page implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  course = 1;

  constructor() { }

  ngOnInit() {
  }

  back() {
    this.slides.slidePrev()
  }
  backHome() {

  }
  next() {
    this.slides.slideNext()
  }

  isVoiceSupported() {
    return this.course == 1;
  }

}
