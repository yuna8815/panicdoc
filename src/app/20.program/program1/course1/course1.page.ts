import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-course1',
  templateUrl: './course1.page.html',
  styleUrls: ['./course1.page.scss'],
})
export class Course1Page implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  course = 1;
  step;
  total;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getActiveIndex()
    this.slides.length().then(idx => {
      this.total = idx
    })
  }
  getActiveIndex() {
    this.slides.getActiveIndex().then(idx => {
      this.step = idx + 1
    })
  }

  back() {
    this.slides.slidePrev()
    this.getActiveIndex();
  }
  backHome() {
    this.router.navigate(['/tabs/home'], { queryParams: { program: 1 } })
  }
  next() {
    this.slides.slideNext()
    this.getActiveIndex();
  }

  isVoiceSupported() {
    return this.course == 1;
  }

}
