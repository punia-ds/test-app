import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  segment = 'all';
  constructor(private catSer: CategoryService, private postSer: PostService) {}

  ngOnInit() {
    this.methodCalls();
  }

  methodCalls() {
    this.getCats();
    this.getPosts();
  }

  catRes: any;
  cats: any;
  getCats() {
    this.catSer.getAllCats().subscribe((res) => {
      this.catRes = res;
      this.cats = this.catRes.message;
    });
  }

  postRes: any;
  postsArr: any;
  posts: any;
  getPosts() {
    this.postSer.getPosts().subscribe((res) => {
      this.postRes = res;
      if (this.postRes.status == 200) {
        this.postsArr = this.postRes.message;
        this.posts = this.postsArr;
      } else {
        this.postsArr = [];
      }
    });
  }

  updateSchedule() {
    // this.posts=this.postsArr.map((res) =>)
    // Close any open sliding items when the schedule updates
    console.log(this.segment);
  }
}
