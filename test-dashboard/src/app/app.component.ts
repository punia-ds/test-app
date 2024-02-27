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
    { title: 'Home', url: '/dashboard', icon: 'home', path: 'dashboard' },
    {
      title: 'Donors',
      url: '/dashboard/donors',
      icon: 'water',
      path: 'donors',
    },
    {
      title: 'Radios',
      url: '/dashboard/radios',
      icon: 'radio',
      path: 'radios',
    },
    {
      title: 'Categories',
      url: '/dashboard/categories',
      icon: 'list',
      path: 'categories',
    },
    {
      title: 'Requests',
      url: '/dashboard/requests',
      icon: 'headset',
      path: 'requests',
    },
    { title: 'Teams', url: '/dashboard/teams', icon: 'people', path: 'teams' },
    {
      title: 'Social',
      url: '/dashboard/social',
      icon: 'share-social',
      path: 'social',
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    let pathArr = this.url.split('/');
    this.path = pathArr[pathArr.length - 1];
    console.log(this.path);
  }
}
