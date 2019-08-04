import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor() { }

  @Input() cartItem;

  ngOnInit() {
    console.log('cartItem', this.cartItem);
  }

  public increaseQty() {
    if (this.cartItem.quantity < 3) {
      this.cartItem.quantity += 1;
    }
  }

  public descreseQty() {
    if (this.cartItem.quantity > 1) {
      this.cartItem.quantity -= 1;
    }
  }
}
