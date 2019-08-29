import { Component, OnInit, Input } from '@angular/core';
import { WebApicrudDetailComponent } from '../web-apicrud-detail/web-apicrud-detail.component';
import { Post, Blog } from '../postModel';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../hero.service';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-web-apicrud-detail-read',
  templateUrl: './web-apicrud-detail-read.component.html',
  styleUrls: ['./web-apicrud-detail-read.component.css']
})
export class WebApicrudDetailReadComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private detailService: DetailService,
  ) { }

  @Input() post: Post;

  goDelete(): void {
    var r = window.confirm("確定刪除這筆資料？");
    if (r) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.deletePost(id)
        .subscribe(hero => this.post = hero);
      this.goBack();
    }
  }

  goBack() {
    this.detailService.goBack();
  };

  ngOnInit() {

  }

}
