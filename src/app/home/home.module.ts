import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { MaterialModule } from '../_core/shared/material.module';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { ChiTietDatVeComponent } from './chi-tiet-dat-ve/chi-tiet-dat-ve.component';
import { GheComponent } from './chi-tiet-dat-ve/ghe/ghe.component';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, TinTucComponent, ChiTietPhimComponent, ChiTietDatVeComponent, GheComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
