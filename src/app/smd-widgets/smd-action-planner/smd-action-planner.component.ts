import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { SmdModalService } from 'src/app/smd-widgets/smd-modal.service';
import { messages } from 'src/messages';

@Component({
  selector: 'smd-action-planner',
  templateUrl: './smd-action-planner.component.html',
  styleUrls: ['./smd-action-planner.component.scss'],
})
export class SmdActionPlannerComponent implements OnInit {

  @Input() write = false;

  checked = {
    '가까운 곳 한 바퀴 돌기(지인과 함께)': false,
    '가까운 곳 한 바퀴 돌기(혼자)': false,
    '30분 이상 시내 운전(지인과 함께)': false,
    '30분 이상 시내 운전(혼자)': false,
    '막히는 도로 운전(지인과 함께)': false,
    '터널이나 다리 운전하기(지인과 함께)': false,
    '터널이나 다리 운전하기(혼자)': false,
    '국도 운전하기(지인과 함께)': false,
    '국도 운전하기(혼자)': false,
    [messages.Etc]: false,
  };
  actions;
  @Input() fixed = false;
  @Input() step1 = '';
  @Input() step2 = '';
  @Input() step3 = '';
  @Output() writeActionClickd = new EventEmitter<number>();
  stepSelecting = 1;
  bp = 0.7;
  h = 100;

  @ViewChild(IonModal) modal: IonModal;

  constructor(public smdModal: SmdModalService) {
    this.actions = Object.keys(this.checked);
  }

  ngOnInit() {
    // 버튼 위치계산
    this.h = document.documentElement.scrollHeight * this.bp - 80;
  }

  selectActions(val: number) {
    this.stepSelecting = val;
    this.modal.present();
  }

  writeAction() {
    this.smdModal.confirm({
      title: '훈련기록 작성',
      message: '훈련기록을 작성하는 경우<br />해당 훈련을 수정, 삭제 할 수 없습니다.',
      cancelButtonText: '종료하기',
      okButtonText: '계속하기',
      onOkCallback: () => {
        this.writeActionClickd.emit();
      }
    });
  }

  selectAction() {
    if (this.checked[messages.Etc]) {
      this.modal.dismiss();
      this.smdModal.prompt({
        title: '직접입력',
        message: '',
        okButtonText: '입력 완료',
        placeholder: '세부 노출계획을 입력해주세요.',
        onOkCallback: () => {
        },
        onCancelCallback: () => {
          this.modal.present();
        }
      });
    } else {
      this.modal.dismiss();
    }
  }
}
