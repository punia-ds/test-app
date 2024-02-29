import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { UpdateComponent } from './update/update.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {
  constructor(
    private requestSer: RequestService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getRequests();
  }

  requestRes: any;
  requests: any;
  getRequests() {
    this.requestSer.getRequests().subscribe((res: any) => {
      this.requestRes = res;
      if (this.requestRes.status === 200) {
        this.requests = this.requestRes.message;
      } else {
        this.requests = [];
      }
    });
  }

  async updateTime(request: any) {
    const modal = await this.modalCtrl.create({
      component: UpdateComponent,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5,
      componentProps: {
        request,
      },
    });
    await modal.present();
  }
}
