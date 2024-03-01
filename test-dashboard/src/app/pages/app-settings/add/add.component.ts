import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  title = 'Add';
  @Input() data: any;

  settingForm!: FormGroup;
  constructor(private settingSer: SettingService, private fb: FormBuilder) {}

  ngOnInit() {
    this.validations();
    console.log(this.data);
    if (this.data) {
      this.title = 'Update';
      this.updatePartialForm();
    }
  }

  validations() {
    this.settingForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      appName: ['', Validators.required],
      bannerAds: ['', Validators.required],
      interAds: ['', Validators.required],
      rewardAds: ['', Validators.required],
    });
  }

  updatePartialForm() {
    this.settingForm.patchValue({
      title: this.data?.heading,
      description: this.data?.description,
      appName: this.data?.appName,
      bannerAds: this.data?.bannerAds,
      interAds: this.data?.interAds,
      rewardAds: this.data?.rewardAds,
    });
  }

  addSetting() {
    this.settingSer.addSetting(this.settingForm.value).subscribe((res) => {
      console.log(res);
      // window.location.reload();
    });
  }
  updateSetting() {
    let payLoad = this.settingForm.value;
    payLoad._id = this.data._id;
    this.settingSer.updateSetting(payLoad).subscribe((res) => {
      window.location.reload();
    });
  }
}
