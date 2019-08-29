import { Component, OnInit, Input } from '@angular/core';
import { WebApicrudDetailComponent } from '../web-apicrud-detail/web-apicrud-detail.component';
import { Post, Blog } from '../postModel';

@Component({
  selector: 'app-web-apicrud-detail-read',
  templateUrl: './web-apicrud-detail-read.component.html',
  styleUrls: ['./web-apicrud-detail-read.component.css']
})
export class WebApicrudDetailReadComponent implements OnInit {

  constructor() { }

  @Input() post: Post;

  goEdit():void {
    window.alert(`這是編輯按鈕`);
  }

  goDelete(): void {
    window.alert(`這是刪除按鈕`);
  }

  ngOnInit() {

  }

}
