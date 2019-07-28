import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemNguoiDungComponent } from './them-nguoi-dung.component';
import { ThemNguoiDungRoutingModule } from './them-nguoi-dung-routing.module';

@NgModule({
  declarations: [ThemNguoiDungComponent],
  imports: [
    CommonModule,
    ThemNguoiDungRoutingModule
  ]
})
export class ThemNguoiDungModule { }
