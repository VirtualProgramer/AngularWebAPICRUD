import { Component, OnInit } from '@angular/core';
import { Post } from '../postModel';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-web-apicrud-detail',
  templateUrl: './web-apicrud-detail.component.html',
  styleUrls: ['./web-apicrud-detail.component.css']
})
export class WebApicrudDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  post: Post;
  getHeroe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getPost(id)
      .subscribe(heroes => this.post = heroes);
  }

  ngOnInit() {
    this.getHeroe();
  }

}
