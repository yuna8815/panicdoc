import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonButton, IonModal } from '@ionic/angular';
import { SmdModalService } from 'src/app/00.component/smd-modal.service';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'program3-course4-step1',
  templateUrl: './program3-course4-step1.component.html',
  styleUrls: ['./program3-course4-step1.component.scss'],
})
export class Program3Course4Step1Component implements OnInit, StepBase {

  playing = false;
  guideStep = 0;
  volumeButtonCx = 0;
  volumeButtonCy = 0;

  @ViewChild('volumeButton', { static: true }) volumeButton: IonButton;
  @ViewChild(IonModal, { static: true }) volumeModal: IonModal;

  constructor(private route: ActivatedRoute, private router: Router, public smdModal: SmdModalService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.showGuide();
    }, 2000);
  }

  onVolume() {
    this.volumeModal.present();
  }

  playOrResume() {
    this.playing = !this.playing;
  }

  hideNext = () => {
    return true;
  }

  back() {
    this.router.navigateByUrl(`/home?program=${this.route.snapshot.queryParams.home}&finishRelax=1`);
  }

  showGuide() {
    this.guideStep = 1;
    this.getGuideElementsGeometry();
  }

  getGuideElementsGeometry() {
    let elem = this.volumeButton['el'] as HTMLElement;
    let rect = elem.getBoundingClientRect();
    this.volumeButtonCx = rect.left + rect.width / 2;
    this.volumeButtonCy = rect.top + rect.height / 2;
  }

  guideNext() {
    this.guideStep++;
    if (this.guideStep == 2) {
      this.volumeModal.present();
    }
    if (this.guideStep == 3) {
      this.volumeModal.dismiss();
      this.guideStep = 0;
    }
  }

  closeVolume() {
    this.volumeModal.dismiss();
    if (this.guideStep == 2) {
      this.guideNext();
    }
  }
}
