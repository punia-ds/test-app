import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private loadingSer: LoadingService) {}

  ngOnInit() {
    // window.onload = function () {
    //   if (!window.location.hash) {
    //     // window.location = window.location + '#loaded';
    //     window.location.reload();
    //   }
    // };
  }
}
