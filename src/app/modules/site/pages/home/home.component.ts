import { Component, OnInit } from '@angular/core';
import { SiteService } from './../../site.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private siteService: SiteService
  ) { }

    productCategories = [];

  title = 'app';

  ngOnInit() {
    this.siteService.getHomeProducts().subscribe(
      (data: any) => {
        this.productCategories = data.data;
        console.log('data.data', data.data);
      },
      err => {
        console.log('eer', err);
      }
    );
  }

}
