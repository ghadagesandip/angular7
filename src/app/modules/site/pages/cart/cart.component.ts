import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../site.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any = [];

  constructor(
    private siteService: SiteService
  ) { }

  ngOnInit() {
    this.siteService.getCartItems().subscribe(
      (resp: any) => {
        this.cartItems = resp.data;
      }
    );
  }

}
