import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Post } from '../postModel';

@Component({
  selector: 'app-web-apicrud',
  templateUrl: './web-apicrud.component.html',
  styleUrls: ['./web-apicrud.component.css']
})
export class WebAPICRUDComponent implements OnInit {

  posts: Post[];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getPosts()
      .subscribe(heroes => this.posts = heroes);
  }

}
