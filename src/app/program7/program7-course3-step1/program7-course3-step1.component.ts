import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmdModalService } from 'src/app/00.component/smd-modal.service';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program7-course3-step1',
  templateUrl: './program7-course3-step1.component.html',
  styleUrls: ['./program7-course3-step1.component.scss'],
})
export class Program7Course3Step1Component implements OnInit, StepBase {

  constructor(private route: ActivatedRoute, private router: Router, public smdModal: SmdModalService) {
  }

  ngOnInit() {}

  editPlan() {
    this.router.navigateByUrl('/program7/edit_exposure');
  }

  gotoWrite() {
    this.router.navigate(['..', '2'], {
      relativeTo: this.route,
    });
  }

  hideNext = () => {
    return true;
  }

}
