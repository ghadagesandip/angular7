import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMediuamComponent } from './product-mediuam.component';

describe('ProductMediuamComponent', () => {
  let component: ProductMediuamComponent;
  let fixture: ComponentFixture<ProductMediuamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMediuamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMediuamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
