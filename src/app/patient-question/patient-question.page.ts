import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-question',
  templateUrl: './patient-question.page.html',
  styleUrls: ['./patient-question.page.scss'],
})
export class PatientQuestionPage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['/pdss-questionnaire']);
  }
}
