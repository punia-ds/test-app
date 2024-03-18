import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Input() request: any;

  addForm!: FormGroup;

  title: string = 'Add Request';

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private reqSer: RequestService
  ) {}

  ngOnInit() {
    this.validations();
    if (this.request) {
      this.title = this.translate.instant('app.REQUEST.VIEW.TITLE');
    } else {
      this.title = this.translate.instant('app.REQUEST.ADD.TITLE');
    }
  }

  validations() {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      song: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  reqRes: any;
  addRequest() {
    if (this.addForm.valid) {
      this.reqSer.addRequest(this.addForm.value).subscribe((res) => {
        this.reqRes = res;
        if (this.reqRes.status == 200) {
          this.addForm.reset();
        }
      });
    }
  }

  get name() {
    return this.addForm.get('name') as FormArray;
  }
}
