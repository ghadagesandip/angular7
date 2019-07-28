import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../site.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    private siteSevice: SiteService,
    private route: ActivatedRoute,

  ) { }

  public products: any = [];
  ngOnInit() {

    this.siteSevice.getCategoryWiseProducts(this.route.snapshot.queryParams.id).subscribe(
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
