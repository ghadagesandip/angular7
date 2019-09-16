import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { AdminService } from '../../../shared/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
  ) { }

  brands = [];
  categories = [];

  addProduct  = this.fb.group({
    name : ['', Validators.required],
    images: this.fb.array([
      this.fb.control(''),
    ]),
    price: ['', Validators.required],
    discount: ['', Validators.required],
    brand: ['', Validators.required],
    category_id: ['', Validators.required],
    warrenty: ['', Validators.required],
    highlights: this.fb.array([
      this.fb.control(''),
    ]),
    general: this.fb.group({
      model_name: ['', Validators.required],
      model_number: ['', Validators.required],
      color: ['', Validators.required],
      in_the_box: ['', Validators.required],
      sim_type: ['', Validators.required],
      touchScreen: [''],
      quick_charging: ['']
    })
  });

  get images() {
    return this.addProduct.get('images') as FormArray;
  }

  get highlights() {
    return this.addProduct.get('highlights') as FormArray;
  }

  addOneMore() {
    console.log('called');
    this.highlights.push(this.fb.control(''));
  }

  addOneMoreImg() {
    this.images.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addProduct.value);
    if (this.addProduct.valid) {
      this.adminService.addProduct(this.addProduct.value).subscribe(
        (resp: any) => {
          this.router.navigate(['/admin/products']);
        }
      );
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.adminService.getCateogies().subscribe(
      (resp: any) => {
        this.categories = resp.data;
      }
    );
  }

  loadBrands(categoryId) {
    this.adminService.getBrands(categoryId).subscribe(
      (resp: any) => {
        this.brands = resp.data;
      }
    );
  }


}
