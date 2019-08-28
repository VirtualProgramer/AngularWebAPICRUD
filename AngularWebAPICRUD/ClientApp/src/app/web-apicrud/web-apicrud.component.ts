import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Post } from '../postModel';

@Component({
  selector: 'app-web-apicrud',
  templateUrl: './web-apicrud.component.html',
  styleUrls: ['./web-apicrud.component.css']
})
export class WebAPICRUDComponent implements OnInit {

  constructor(
    private heroService: HeroService
  ) { }

  posts: Post[];
  getHeroes(): void {
    this.heroService.getPosts()
      .subscribe(heroes => this.posts = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
