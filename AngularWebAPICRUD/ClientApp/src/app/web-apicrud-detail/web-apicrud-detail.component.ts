import { Component, OnInit } from '@angular/core';
import { Post, Blog } from '../postModel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-web-apicrud-detail',
  templateUrl: './web-apicrud-detail.component.html',
  styleUrls: ['./web-apicrud-detail.component.css']
})
export class WebApicrudDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
    private detailService: DetailService,
  ) { }

  post: Post;
  blog: Blog;
  editState: boolean = false;

  ngOnInit() {
    this.getHeroe();
  }

  getHeroe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getPost(id)
      .subscribe(heroes => this.post = heroes);
  }

  goBack(): void {
    this.detailService.goBack();
  }
}
