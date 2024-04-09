import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.page.html',
  styleUrls: ['./add-donor.page.scss'],
})
export class AddDonorPage implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validations();
  }

  register() {
    console.log(this.registerForm.value);
  }

  validations() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      dob: '',
      description: [''],
      b_group: ['', Validators.required],
      age: [''],
      area: ['', Validators.required],
      address: ['', Validators.required],
      getTime: Date.now(),
    });
  }
}
