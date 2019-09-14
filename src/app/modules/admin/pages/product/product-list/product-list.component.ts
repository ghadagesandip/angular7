import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AdminService } from '../../../shared/admin.service';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { Category, Brand } from './product.types';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../../../components/confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  constructor(
    private adminService: AdminService,
    public dialog: MatDialog
  ) { }

  products = [];
  categories: Category[] = [];
  categoryId: string;
  brands: Brand[];
  brandId: string;

  pageSize = 5;
  pageSizeOptions: [5, 10, 25, 100];
  pageIndex = 0;
  length = 10;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.paginator.page
        .pipe(
            tap(() => this.loadProducts())
        )
        .subscribe();
  }


  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    const page = this.paginator && this.paginator.pageIndex ? this.paginator.pageIndex : 0;
    const category = this.categoryId ? this.categoryId : '';
    const brand = this.brandId ? this.brandId : '';

    this.adminService.getProducts(page, category, brand).subscribe(
      (resp: any) => {
        this.products = resp.data;
        this.length = resp.pagination.total;
        this.pageSize = resp.pagination.limit;
      },
    );
  }

  loadCategories(): void {
    this.adminService.getCateogies().subscribe(
      (resp: any) => {
        this.categories = resp.data;
      }
    );
  }

  loadBrands(categoryId): void {
    this.adminService.getBrands(categoryId).subscribe(
      (resp: any) => {
        this.brands = resp.data;
      }
    );
  }

  setCategory(val) {
    this.paginator.pageIndex = 0;
    this.categoryId = val.value;
    this.loadProducts();
  }

  setBrand(val) {
    this.paginator.pageIndex = 0;
    this.brandId = val.value;
    this.loadProducts();
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '350px',
      data: {
        _id: id, path: 'products'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
