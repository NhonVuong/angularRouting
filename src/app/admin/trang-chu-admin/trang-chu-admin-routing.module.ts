import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuAdminComponent } from './trang-chu-admin.component';

const routes: Routes = [
   {
       path: "",
       component: TrangChuAdminComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangChuAdminRoutingModule { }
