import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addForm!: FormGroup;
  user: any = localStorage.getItem('userId');

  constructor(private fb: FormBuilder,private postSer:JokeService) {}

  description: any = '';

  ngOnInit() {}

  addPost() {
    let payload = {
      description: this.description,
      title: 'Latest Haryanvi Jokes',
      category: 'jokes',
      tags: 'latest Haryanvi jokes, Haryanvi humor, 2024 comedy trends, Indian regional jokes, desi laughs, Haryana culture, local dialect fun, witty punchlines, humorous sayings, laughter therapy, cultural comedy',
      shortDescription: this.description.slice(0, 80),
      addedBy: this.user,
    };

    console.log(this.description);
  }
}
