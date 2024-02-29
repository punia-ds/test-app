import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  @Input() request: any;

  date: any;
  time: any;

  showCalendar!: boolean;
  constructor(private reqSer: RequestService) {}

  ngOnInit() {
    if (this.request.playing_at) {
      this.convertDate();
    }
  }

  convertDate() {
    const date = new Date(parseInt(this.request?.playing_at));

    console.log(date);

    // Then, format it as "YYYY-MM-DDTHH:MM:SS"
    const formattedDate =
      date.getUTCFullYear() +
      '-' +
      ('0' + (date.getUTCMonth() + 1)).slice(-2) +
      '-' + // Months are 0-indexed
      ('0' + date.getUTCDate()).slice(-2) +
      'T' +
      ('0' + date.getUTCHours()).slice(-2) +
      ':' +
      ('0' + date.getUTCMinutes()).slice(-2) +
      ':' +
      ('0' + date.getUTCSeconds()).slice(-2);

    this.date = formattedDate;
  }

  updateTime() {
    var date = new Date(this.date);

    let payLoad = {
      _id: this.request._id,
      playing_at: date.getTime(),
    };

    this.reqSer.updatePlaying(payLoad).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }

  openCalendar() {
    this.showCalendar = true;
  }
  cancelCalendar() {
    this.showCalendar = false;
  }
}
