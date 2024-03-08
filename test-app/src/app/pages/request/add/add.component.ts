import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Input() request: any;

  title: string = 'Add Request';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    if (this.request) {
      this.title = 'View Request';
    }
  }
}
