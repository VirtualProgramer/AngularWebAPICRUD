import { Component, OnInit } from '@angular/core';
//import { WebApicrudDetailComponent } from '../web-apicrud-detail/web-apicrud-detail.component';
import { Post, Blog } from '../postModel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-web-apicrud-detail-edit',
  templateUrl: './web-apicrud-detail-edit.component.html',
  styleUrls: ['./web-apicrud-detail-edit.component.css']
})
export class WebApicrudDetailEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private detailService: DetailService,
    private location: Location
  ) { }

  post: Post;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getPost(id)
      .subscribe(hero => this.post = hero);
  }

  goBack(): void {
    this.detailService.goBack();
  }

  goSave(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.updatePost(id, this.post)
      .subscribe(hero => this.post = hero);
    window.alert("修改~");
    this.getHero();
  }
}
