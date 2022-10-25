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

  step;
  total;
  btnMsg: string = '다음';
  isEnd: boolean = false

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
    if(this.isEnd) {
      this.backHome();
      return;
    }
    this.slides.slideNext()
    this.slides.isEnd().then(v => {
      if(v) {
        this.btnMsg = '완료'
        this.isEnd = true
      }
      else this.isEnd = false
    })
    this.getActiveIndex();
  }

}
