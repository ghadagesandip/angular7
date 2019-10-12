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
  imageList: any = [];
  highlightList: any = [];
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

    this.editProduct = this.fb.group({
      name: ['', Validators.required],
      images: this.fb.array([]),
      description: ['', [Validators.required]],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      brand: ['', Validators.required],
      category_id: ['', Validators.required],
      warrenty: ['', Validators.required],
      highlights: this.fb.array([]),
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
        console.log(resp);
        this.adminService.getBrands(resp.data.category_id).subscribe(
          (categories: any) => {
            this.brands = categories.data;
          }
        );
        resp.data.images.forEach(el => {
          this.addOneMoreImg();
        });

        resp.data.highlight.forEach(el => {
          this.addOneMoreHighlight();
        });

        this.editProduct.patchValue({
          name: resp.data.name,
          description: resp.data.description,
          images: resp.data.images,
          price: resp.data.price,
          discount: resp.data.discount,
          category_id: resp.data.category_id,
          brand: resp.data.brand._id,
          warrenty: 1,
          highlights: resp.data.highlight,
          general: {
            model_name: resp.data.general.model_name,
            model_number: resp.data.general.model_number,
            color: resp.data.general.color,
            in_the_box: resp.data.general.in_the_box,
            sim_type: resp.data.general.sim_type,
            touchScreen: resp.data.general.touchScreen,
            quick_charging: resp.data.general.quick_charging
          },
        });
      }

    );
  }

  get f() {
    return this.editProduct.controls;
  }

  addImage() {
    return this.fb.control('');
  }

  removeImg(i) {
    this.images.controls.splice(i, 1);
  }

  addOneMoreImg(): void {
    this.imageList = this.editProduct.get('images') as FormArray;
    this.imageList.push(this.addImage());
  }

  addHighlight() {
    return this.fb.control('');
  }

  addOneMoreHighlight() {
    this.highlightList = this.editProduct.get('highlights') as FormArray;
    this.highlightList.push(this.addHighlight());
  }


  removeHighlight(i) {
    this.highlights.controls.splice(i, 1);
  }

  get images() {
    return this.editProduct.get('images') as FormArray;
  }

  get highlights() {
    return this.editProduct.get('highlights') as FormArray;
  }

  onSubmit() {
    if (this.editProduct.valid) {
      this.adminService.editProduct(this.route.snapshot.params.id, this.editProduct.value).subscribe(
        (resp: any) => {
          this.router.navigate(['/admin/products']);
        }
      );
    } else {
      return false;
    }
  }

}
