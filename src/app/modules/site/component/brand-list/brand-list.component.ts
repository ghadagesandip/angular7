import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  @Input() brands;
  @Input() total;

  selectedBrand = 'all';

  @Output() selectedBrandId: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleclick(value) {
    console.log('valie', value);
  }

  selectBrand(id: string) {
    this.selectedBrand = id;
    this.selectedBrandId.emit(this.selectedBrand);
  }

}
