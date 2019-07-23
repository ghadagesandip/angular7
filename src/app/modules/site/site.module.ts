import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './component/banner/banner.component';
import { MaterialModule } from './../material/material-module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialModule
  ]
})
export class SiteModule { }
