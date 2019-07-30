import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  public brandList: any = [];
  public selectedBrand: string;
  public allCount = 0 ;


  ngOnInit() {

    this.siteSevice.getBrandList(this.route.snapshot.queryParams.id).subscribe(
      (res: any) => {
        this.allCount = res.data.reduce((total, brand) => {
          return total + brand.product_count;
        }, 0);
        this.brandList = res.data;
        console.log('this.allCount ', this.allCount);
      }
    );

    this.loadProducts();
  }

  loadProducts() {

    this.siteSevice.getCategoryWiseProducts(this.route.snapshot.queryParams.id, this.selectedBrand).subscribe(
      (res: any) => {
        this.products = res.data;
        console.log('data', this.products);
      },
      err => {
        console.log('eer', err);
      }
    );
  }

  onProductBrandSelect(val) {
    this.selectedBrand = val;
    console.log('value to para', val);
    this.loadProducts();
  }


}
