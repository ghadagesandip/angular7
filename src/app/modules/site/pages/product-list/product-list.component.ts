import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../site.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    private siteSevice: SiteService
  ) { }

  public products: any = [];
  ngOnInit() {

    this.siteSevice.getCategoryWiseProducts('5d224669ca5bec29abdf23ed').subscribe(
      (data: any) => {
        this.products = data.data;
        console.log('data', this.products);
      },
      err => {
        console.log('eer', err);
      }
    );
  }

}
