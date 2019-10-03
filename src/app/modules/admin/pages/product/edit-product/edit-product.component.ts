import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../shared/admin.service';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  brands = [];
  categories = [];
  editProduct: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.adminService.getCateogies().subscribe(
      (resp: any) => {
        this.categories = resp.data;
      }
    );

    this.editProduct  = this.fb.group({
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

    this.adminService.getProduct(this.route.snapshot.params.id).subscribe(
      (resp: any) => {

        this.adminService.getBrands(resp.data.category_id).subscribe(
          (categories: any) => {
            this.brands = categories.data;
          }
        );
        this.editProduct.patchValue({
          name: resp.data.name,
          images: resp.data.images,
          price: resp.data.price,
          discount: resp.data.discount,
          category_id: resp.data.category_id,
          brand: resp.data.brand._id,
          warrenty: resp.data.warranty,
          highlights: resp.data.highlights,
          general: {
            model_name: 'Sandip'
          },
        });
      }
    );
  }


  addOneMore() {
    this.highlights.push(this.fb.control(''));
  }

  addOneMoreImg() {
    this.images.push(this.fb.control(''));
  }


  get images() {
    return this.editProduct.get('images') as FormArray;
  }

  get highlights() {
    return this.editProduct.get('highlights') as FormArray;
  }

  onSubmit() {
    if (this.editProduct.valid) {
      this.adminService.addProduct(this.editProduct.value).subscribe(
        (resp: any) => {
          this.router.navigate(['/admin/products']);
        }
      );
    } else {
      return false;
    }
  }

}
