import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { GlobalContextService } from 'src/app/global-context.service';
import { CourseData } from './courses';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  week: string;
  day = 1;
  title = 'TITLE';
  description = '';
  courses = [];
  guideStep = 0;
  releaxTrainingGuide = false
  finishRelax;

  CourseData = CourseData;

  constructor(
    public route: ActivatedRoute,
    public auth: AuthService,
    public context: GlobalContextService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.week = null;
      if (params['program']) {
        this.week = params['program'] || '1';
        const currCourseData = CourseData[this.week];
        if (currCourseData) {
          this.title = currCourseData.title;
          this.description = currCourseData.description;
          this.courses = currCourseData.courses;
        }
      }
      if (params['finishRelax']) {
        this.finishRelax = true;
      }
    });
  }

}
