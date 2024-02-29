import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Input() social: any;
  title: string = 'Add';

  addForm!: FormGroup;

  constructor(private fb: FormBuilder, private socialSer: SocialService) {}

  ngOnInit() {
    this.validations();
    if (this.social) {
      this.title = 'Update';
      this.updateFormFields();
    }
  }

  updateFormFields() {
    this.addForm.patchValue({
      name: this.social?.name,
      link: this.social?.link,
      mobileIcon: this.social?.mobileIcon,
      webIcon: this.social?.webIcon,
    });
  }

  add() {
    let data = this.addForm.value;
    this.socialSer.addSocial(data).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }

  update() {
    let data = this.addForm.value;
    data._id = this.social?._id;
    this.socialSer.updateSocial(data).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }

  validations() {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      link: ['', Validators.required],
      mobileIcon: ['', Validators.required],
      webIcon: ['', Validators.required],
    });
  }
}
