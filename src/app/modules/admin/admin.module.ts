import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CustomerComponent } from './pages/customer/customer.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { CategoryService} from './shared/category.service';
import { AdminService } from './admin.service';
import { MaterialModule } from '../material/material-module';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    CustomerComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
  providers: [
    CategoryService,
    AdminService
  ],
})
export class AdminModule { }
