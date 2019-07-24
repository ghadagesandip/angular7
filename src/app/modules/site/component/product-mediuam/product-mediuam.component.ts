import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-mediuam',
  templateUrl: './product-mediuam.component.html',
  styleUrls: ['./product-mediuam.component.scss']
})
export class ProductMediuamComponent implements OnInit {

  @Input() product: any;

  constructor() { }

  ngOnInit() {
  }

}
