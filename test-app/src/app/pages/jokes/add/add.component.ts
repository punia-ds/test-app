import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { JokeService } from 'src/app/services/joke.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addForm!: FormGroup;
  user: any = localStorage.getItem('userId');

  constructor(
    private fb: FormBuilder,
    private postSer: JokeService,
    private modalController: ModalController,
    private toastSer: ToastService
  ) {}

  description: any = '';

  ngOnInit() {}

  addRes: any;
  addPost() {
    let payload = {
      description: this.description,
      title: 'Latest Haryanvi Jokes',
      category: 'jokes',
      tags: 'latest Haryanvi jokes, Haryanvi humor, 2024 comedy trends, Indian regional jokes, desi laughs, Haryana culture, local dialect fun, witty punchlines, humorous sayings, laughter therapy, cultural comedy',
      shortDescription: this.description.slice(0, 80),
      addedBy: this.user,
    };

    this.postSer.addPost(payload).subscribe((res) => {
      this.addRes = res;
      if (this.addRes.status == 200) {
        this.modalController.dismiss();
        this.toastSer.showToast(this.addRes.message);
      } else {
        this.toastSer.showToast(this.addRes.message);
      }
    });
  }
}
