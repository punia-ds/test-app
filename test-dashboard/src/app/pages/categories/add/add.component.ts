import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  catForm!: FormGroup;

  @Input() cat: any;

  constructor(private fb: FormBuilder, private catSer: CategoryService) {}

  ngOnInit() {
    this.validations();
    if (this.cat) {
      this.updatePartialForm();
    }
  }

  updatePartialForm() {
    this.catForm.patchValue({
      name: this.cat?.name,
      slug: this.cat?.slug,
      description: this.cat?.description,
      image: this.cat?.image,
    });
  }

  addCat() {
    let data = this.catForm.value;
    this.catSer.addCat(data).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }
  updateCat() {
    let data = this.catForm.value;
    data._id = this.cat?._id;
    this.catSer.updateCat(data).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }

  validations() {
    this.catForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      image: [''],
      slug: [''],
    });
  }
}
