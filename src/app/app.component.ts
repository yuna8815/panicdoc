import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { SmdModalService } from './00.component/smd-modal.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild('modal1', { static: true }) modal1: IonModal;

  constructor(
    public smdModal: SmdModalService,
    public auth: AuthService
  ) {
  }

  ngOnInit() {
    this.smdModal.modal1 = this.modal1;
  }

}
