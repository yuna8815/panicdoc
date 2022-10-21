import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdss-questionnaire',
  templateUrl: './pdss-questionnaire.page.html',
  styleUrls: ['./pdss-questionnaire.page.scss'],
})
export class PdssQuestionnairePage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['pdss-questionnaire-step1']);
  }

}
