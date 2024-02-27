import { Component, Input, OnInit } from '@angular/core';
import { DonorService } from 'src/app/services/donor.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  @Input() donor: any;

  constructor(private donorSer: DonorService) {}

  ngOnInit() {
    console.log(this.donor);
  }

  onClick(active: boolean) {
    this.donorSer
      .changeStatus({ _id: this.donor._id, status: !active })
      .subscribe((res) => {
        window.location.reload();
      });
  }
}
