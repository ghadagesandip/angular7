import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CustomerComponent } from './pages/customer/customer.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminService } from './shared/admin.service';
import { MaterialModule } from '../material/material-module';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { EditProductComponent } from './pages/product/edit-product/edit-product.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    CustomerComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    ConfirmDeleteComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
  providers: [
    AdminService
  ],
  entryComponents: [
    ConfirmDeleteComponent
  ]
})
export class AdminModule { }
