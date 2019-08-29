import { Component, OnInit } from '@angular/core';
import { Post, Blog } from '../postModel';
import { HeroService } from '../hero.service';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-web-apicrud-add',
  templateUrl: './web-apicrud-add.component.html',
  styleUrls: ['./web-apicrud-add.component.css']
})
export class WebApicrudAddComponent implements OnInit {

  post: Post = {
    PostId: 0,
    Title: "A123",
    Content: "AANONO",
    BlogId: 2
  };
  
  constructor(
    private heroService: HeroService,
    private detailService: DetailService,
  ) { }

  ngOnInit() {
  }

  goAdd() {
    this.heroService.addPost(this.post)
      .subscribe(hero => this.post = hero);
    window.alert(`新增~`);
    this.goBack();
  }

  goBack(): void {
    this.detailService.goBack();
  }
}
