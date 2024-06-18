import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contactForm!: FormGroup;
  constructor(private translate: TranslateService, private fb: FormBuilder) {}

  ngOnInit() {
    this.validations();
  }

  validations() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  addContact() {}

  get name() {
    return this.contactForm.get('name') as FormArray;
  }
}
