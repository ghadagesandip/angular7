import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { ListCategoryComponent } from './pages/category/list-category/list-category.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'customer',
        component: CustomerComponent,
      },
      {
        path: 'list-category',
        component: ListCategoryComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
