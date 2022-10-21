import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import * as moment from 'moment';
import { SmdModalService } from 'src/app/smd-widgets/smd-modal.service';
import { StepBase } from 'src/app/step-base';

@Component({
  selector: 'panic-log-write-step0',
  templateUrl: './panic-log-write-step0.component.html',
  styleUrls: ['./panic-log-write-step0.component.scss'],
})
export class PanicLogWriteStep0Component implements OnInit, StepBase {

  initialDate: string;
  datePicked: moment.Moment;
  @ViewChild(IonModal) modal: IonModal;

  constructor(private smdModal: SmdModalService) {
    const m = moment();
    this.datePicked = m;
    this.initialDate = moment(m).add(9, 'hours').toISOString();
  }

  ngOnInit() {
  }

  onDateChange($event) {
    const date = $event.detail.value;
    this.datePicked = moment(date);
  }

  getButtonText = () => {
    return moment(this.datePicked).format('LLL');
  }

  next = () => {
    return new Promise<boolean>((resolve, _) => {
      this.smdModal.confirm({
        title: '공황기록 작성',
        message: '공황을 객관적으로 관찰하여<br />구체적으로 작성하는 것이 좋습니다.<br /><br />공황에 대해 자세하게 입력하시겠습니까?',
        onOkCallback: () => {
          resolve(true);
        },
        onCancelCallback: () => {
          resolve(false);
        }
      });
    });
  }
}
