import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuAdminComponent } from './trang-chu-admin.component';
import { TrangChuAdminRoutingModule } from './trang-chu-admin-routing.module';

@NgModule({
  declarations: [TrangChuAdminComponent],
  imports: [
    CommonModule,
    TrangChuAdminRoutingModule
  ]
})
export class TrangChuAdminModule { }
