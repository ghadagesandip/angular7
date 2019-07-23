import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService
  ) { }

    productCategories = [];

  title = 'app';

  ngOnInit() {
    this.homeService.getProductCategories().subscribe(
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
