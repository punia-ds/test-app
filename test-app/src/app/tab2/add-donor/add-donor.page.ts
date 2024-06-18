import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { DonationService } from 'src/app/services/donation.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.page.html',
  styleUrls: ['./add-donor.page.scss'],
})
export class AddDonorPage implements OnInit {
  registerForm!: FormGroup;
  minDate!: Moment;
  isEvent: boolean = false;

  lang = 'en-IN';

  groups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  showCalendar!: boolean;

  options = {
    date: {
      weekday: 'short',
      month: 'long',
      day: '2-digit',
    },
    time: {
      hour: '2-digit',
      minute: '2-digit',
    },
  };

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private donorSer: DonationService,
    private toastSer: ToastService,
    private router: Router
  ) {}

  ngOnInit() {
    this.validations();

    let selectedLang = this.translate.currentLang;

    if (selectedLang == 'hi') {
      this.lang = 'hi-IN';
    } else {
      this.lang = 'en-IN';
    }

    const today = new Date();
    this.minDate = moment(today).subtract(18, 'years').startOf('day');
  }

  addRes: any;
  register() {
    console.log(this.registerForm.value);
    this.donorSer.addDonor(this.registerForm.value).subscribe((res) => {
      this.addRes = res;
      if (this.addRes.status == 200) {
        this.registerForm.reset();
        this.toastSer.showToast(
          this.translate.instant('app.DONATION.TOAST.SUCCESS')
        );
        this.router.navigate(['/radio/donation']);
      } else {
        this.toastSer.showToast(
          this.translate.instant('app.DONATION.TOAST.FAILED')
        );
      }
      console.log(res);
    });
  }

  changeDate(e: any) {
    if (e.detail.value) {
      this.isEvent = true;
    } else {
      this.isEvent = false;
    }
  }

  validations() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      dob: new Date().toISOString(),
      description: [''],
      b_group: ['', Validators.required],
      age: [''],
      area: ['', Validators.required],
      address: ['', Validators.required],
      getTime: Date.now(),
      active: true,
    });
  }

  openCalendar() {
    this.showCalendar = true;
  }

  cancelCalendar() {
    this.showCalendar = false;
  }
}
