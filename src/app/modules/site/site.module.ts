import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './component/banner/banner.component';
import { MaterialModule } from './../material/material-module';
import { ProductComponent } from './component/product/product.component';
import { CharlimitPipe } from 'src/app/shared/pipes/charlimit.pipe';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SiteService } from './site.service';
import { ProductMediuamComponent } from './component/product-mediuam/product-mediuam.component';
import { BrandListComponent } from './component/brand-list/brand-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ProductComponent,
    CharlimitPipe,
    ProductListComponent,
    LayoutComponent,
    ProductMediuamComponent,
    BrandListComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialModule
  ],
  providers: [SiteService]
})
export class SiteModule { }
