import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

import { CategoryService } from 'src/app/services/category.service';
import { RadioService } from 'src/app/services/radio.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  radioForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private catSer: CategoryService,
    private radioSer: RadioService,
    private alertSer: AlertService
  ) {}

  ngOnInit() {
    this.validations();
    this.getCats();
  }

  catRes: any;
  cats: any;
  getCats() {
    this.catSer.getAllCats().subscribe((res) => {
      this.catRes = res;
      if (this.catRes.status == 200) {
        this.cats = this.catRes?.message?.filter(
          (c: any) => c.status == 'active'
        );
        console.log(this.cats);
      }
    });
  }
  validations() {
    this.radioForm = this.fb.group({
      category: ['', Validators.required],
      description: ['', Validators.required],
      fb: ['', Validators.required],
      insta: ['', Validators.required],
      twitter: ['', Validators.required],
      head: ['', Validators.required],
      image: ['', Validators.required],
      meta: ['', Validators.required],
      title: ['', Validators.required],
      url: ['', Validators.required],
      website: ['', Validators.required],
      youtube: ['', Validators.required],
    });
  }

  radioRes: any;
  addRadio() {
    let data = this.radioForm.value;

    // console.log(data)
    this.radioSer.addRadio(data).subscribe((res) => {
      this.radioRes = res;
      if (this.radioRes.status == 200) {
        window?.location.reload();
      } else {
        this.alertSer.presentAlert('Adding', 'Error', this.radioRes.message);
      }
    });
  }

  updateRes: any;
  updateRadio(radio: any) {
    this.radioSer
      .updateRadioStatus({ _id: radio._id, status: 'active' })
      .subscribe((res) => {
        this.updateRes = res;
        if (this.updateRes.status == 200) {
          window?.location.reload();
        } else {
          this.alertSer.presentAlert('Status', 'Error', this.updateRes.message);
        }
      });
  }
}
