import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../../../shared/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public brands = [];
  public categories = [];
  public addProduct: FormGroup;
  public general: FormGroup;

  urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  // reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
  ) {

    this.createForm();
  }

  ngOnInit() {
    this.adminService.getCateogies().subscribe(
      (resp: any) => {
        this.categories = resp.data;
      }
    );
  }

  private createForm() {
    this.addProduct = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      images: this.fb.array([
        this.fb.control('', [Validators.required]),
      ]),
      price: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      warrenty: ['', [Validators.required]],
      highlights: this.fb.array([
        this.fb.control('', [Validators.required]),
      ]),
      general: this.fb.group({
        model_name: ['', [Validators.required]],
        model_number: ['', [Validators.required]],
        color: ['', [Validators.required]],
        in_the_box: ['', [Validators.required]],
        sim_type: ['', [Validators.required]],
        touchScreen: [''],
        quick_charging: ['']
      })
    });
  }





  get f() {
    return this.addProduct.controls;
  }

  get images() {
    return this.addProduct.get('images') as FormArray;
  }

  addOneMoreImg() {
    this.images.push(this.fb.control(''));
  }

  removeImg(i) {
    this.images.controls.splice(i, 1);
  }

  get highlights() {
    return this.addProduct.get('highlights') as FormArray;
  }

  addOneMore() {
    this.highlights.push(this.fb.control(''));
  }



  removeHighlight(i) {
    this.highlights.controls.splice(i, 1);
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
      // return false;
      this.validateAllFormFields(this.addProduct);

    }
  }

  loadBrands(categoryId) {
    this.adminService.getBrands(categoryId).subscribe(
      (resp: any) => {
        this.brands = resp.data;
      }
    );
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
