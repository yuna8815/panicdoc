import { Injectable } from '@angular/core';
import { IonModal } from '@ionic/angular';

export interface ModalOptions {
  title: string;
  message: string;
  okButtonText?: string;
  cancelButtonText?: string;
  onOkCallback?: CallableFunction;
  onCancelCallback?: CallableFunction;
  placeholder?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SmdModalService {

  modalType: 'alert' | 'confirm' | 'prompt';
  title = 'TITLE';
  message = 'MESSAGE';
  okButtonText: string;
  cancelButtonText: string;
  modal1: IonModal;
  onOkCallback: CallableFunction;
  onCancelCallback: CallableFunction;
  multilineInput: boolean;
  placeholder: string;

  constructor() {
  }

  alert(options: ModalOptions) {
    this.modalType = 'alert';
    this.title = options.title;
    this.message = options.message;
    this.onOkCallback = options.onOkCallback;
    this.onCancelCallback = options.onCancelCallback;
    this.modal1.present();
  }

  confirm(options: ModalOptions) {
    this.modalType = 'confirm';
    this.title = options.title;
    this.message = options.message;
    this.okButtonText = options.okButtonText;
    this.cancelButtonText = options.cancelButtonText;
    this.onOkCallback = options.onOkCallback;
    this.onCancelCallback = options.onCancelCallback;
    this.modal1.present();
  }

  prompt(options: ModalOptions) {
    this.modalType = 'prompt';
    this.title = options.title;
    this.message = options.message;
    this.okButtonText = options.okButtonText;
    this.cancelButtonText = options.cancelButtonText;
    this.onOkCallback = options.onOkCallback;
    this.onCancelCallback = options.onCancelCallback;
    this.multilineInput = true;
    this.placeholder = options.placeholder;
    this.modal1.present();
  }

  onOk() {
    this.modal1.dismiss();
    if (this.onOkCallback) {
      this.onOkCallback();
    }
  }

  onCancel() {
    this.modal1.dismiss();
    if (this.onCancelCallback) {
      this.onCancelCallback();
    }
  }

}
