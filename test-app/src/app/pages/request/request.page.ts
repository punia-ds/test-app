import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { AddComponent } from './add/add.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  reqRes: any;
  requests: any;
  constructor(
    private reqSer: RequestService,
    private modalCtrl: ModalController,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.reqSer.allRequests().subscribe((res: any) => {
      this.reqRes = res;
      if (this.reqRes.status === 200) {
        this.requests = this.reqRes.message;
      } else {
        this.requests = [];
      }
    });
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: AddComponent,
      breakpoints: [0, 0.8],
      initialBreakpoint: 0.8,
    });
    await modal.present();
  }

  async viewRequest(request: any) {
    const modal = await this.modalCtrl.create({
      component: AddComponent,
      breakpoints: [0, 0.8],
      initialBreakpoint: 0.8,
      componentProps: {
        request,
      },
    });
    await modal.present();
  }
}
