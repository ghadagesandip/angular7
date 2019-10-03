import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, AfterViewInit {

  constructor( private adminService: AdminService) { }

  customers: [];
  pageSize = 10;
  pageSizeOptions: [5, 10, 25, 100];
  pageIndex = 0;
  length = 10;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.paginator.page
        .pipe(
            tap(() => this.loadCustomers())
        )
        .subscribe();
  }


  ngOnInit() {
    this.loadCustomers();
  }


  loadCustomers() {
    const page = this.paginator && this.paginator.pageIndex ? this.paginator.pageIndex : 0;
    const limit = this.paginator && this.paginator.pageSize ? this.paginator.pageSize : 10;
    this.adminService.getCustomers(page, limit).subscribe(
      (resp: any) => {
        this.customers = resp.data;
        this.length = resp.pagination.total;
        this.pageSize = resp.pagination.limit;
      },
    );
  }


}
