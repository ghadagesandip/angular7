import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:  '',
    loadChildren: () => import('./modules/site/site.module')
    .then(mod => mod.SiteModule)
  },
  {
    path:  'login',
    loadChildren: () => import('./modules/login/login.module')
    .then(mod => mod.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module')
      .then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
