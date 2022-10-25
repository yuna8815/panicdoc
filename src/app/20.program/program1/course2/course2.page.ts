import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-course2',
  templateUrl: './course2.page.html',
  styleUrls: ['./course2.page.scss'],
})
export class Course2Page implements OnInit {

  @ViewChild('slides') slides: IonSlides

  step = 0;

  imagePerStep = [
    'img001.png',
    'img002.png',
    null,
    'img004.png',
    null,
    'img005.png',
    null,
    'img006.png',
    null,
    'img007.png',
    null,
    'img008.png',
    null,
    'img009.png',
    null,
    'img010.png',
    null,
    'img011.png',
    null,
    'img012.png',
    null,
  ];
  isEnd: boolean = false;

  constructor(
    // private route: ActivatedRoute,
    private router: Router
  ) {
    // this.route.params.subscribe(params => {
    //   this.step = +(params['step'] || 0);
    // });
  }

  ngOnInit() {
    this.step = 0;
  }

  ionViewWillEnter() {
    this.getActiveIndex()
  }

  getActiveIndex() {
    this.slides.getActiveIndex().then(idx => {
      this.step = idx
    })
  }

  back() {
    this.slides.slidePrev()
    this.getActiveIndex()
  }
  backHome() {
    this.router.navigate(['/tabs/home'], { queryParams: { program: 1 } });
  }

  next() {
    if(this.isEnd) {
      this.backHome();
      return;
    }
    this.slides.slideNext()
    this.getActiveIndex()
    this.slides.isEnd().then(v => {
      if(v) this.isEnd = true
      else this.isEnd = false
    })
    // if (this.step == 20) {
    //   this.router.navigate(['/home'], { queryParams: { program: 1 } });
    // } else {
    //   this.step++;
    // }
  }

  isQuiz() {
    return [1, 3, 5, 7, 9, 11, 13, 15, 17, 19].indexOf(this.step) != -1;
  }

}
