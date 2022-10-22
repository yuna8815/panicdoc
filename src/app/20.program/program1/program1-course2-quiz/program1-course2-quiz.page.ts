import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'program1-course2-quiz',
  templateUrl: './program1-course2-quiz.page.html',
  styleUrls: ['./program1-course2-quiz.page.scss'],
})
export class Program1Course2QuizPage implements OnInit {

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

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.step = +(params['step'] || 0);
    });
  }

  ngOnInit() {
    this.step = 0;
  }

  home() {
    this.router.navigate(['/home'], { queryParams: { program: 1 } });
  }

  next() {
    if (this.step == 20) {
      this.router.navigate(['/home'], { queryParams: { program: 1 } });
    } else {
      this.step++;
    }
  }

  isQuiz() {
    return [1, 3, 5, 7, 9, 11, 13, 15, 17, 19].indexOf(this.step) != -1;
  }

}
