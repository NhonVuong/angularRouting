import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ThemPhimComponent } from "./them-phim/them-phim.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        loadChildren: "./trang-chu-admin/trang-chu-admin.module#TrangChuAdminModule"
      },
      {
        path: "them-phim",
        component: ThemPhimComponent
      },
      {
        path: "them-nguoi-dung",
        loadChildren: "./them-nguoi-dung/them-nguoi-dung.module#ThemNguoiDungModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
