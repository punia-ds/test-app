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
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    let pathArr = this.url.split('/');
    this.path = pathArr[pathArr.length - 1];
  }
}
