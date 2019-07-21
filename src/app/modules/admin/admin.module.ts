import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { CategoryService} from './shared/category.service';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    CustomerComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [CategoryService],
})
export class AdminModule { }
