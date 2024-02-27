import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  url = window.location.href;
  path: any;
  user: any = JSON.parse(localStorage.getItem('user') || '');
  public appPages = [
    { title: 'Home', url: '/dashboard', icon: 'home' },
    { title: 'Donors', url: '/dashboard/donors', icon: 'water' },
    { title: 'Radios', url: '/dashboard/radios', icon: 'radio' },
    { title: 'Categories', url: '/dashboard/categories', icon: 'list' },
    { title: 'Requests', url: '/dashboard/requests', icon: 'headset' },
    { title: 'Teams', url: '/dashboard/teams', icon: 'people' },
    { title: 'Social', url: '/dashboard/social', icon: 'share-social' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    let pathArr = this.url.split('/');
    this.path = pathArr[pathArr.length - 1];
  }
}
