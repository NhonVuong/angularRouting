import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TrangChuComponent } from "./trang-chu/trang-chu.component";
import { TinTucComponent } from "./tin-tuc/tin-tuc.component";
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { ChiTietDatVeComponent } from './chi-tiet-dat-ve/chi-tiet-dat-ve.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: TrangChuComponent
      },
      {
        path: "trang-chu",
        component: TrangChuComponent
      },
      {
        path: "tin-tuc",
        component: TinTucComponent
      },
      //Trang Danh sach phim
      {
        path: "danh-sach-phim",
        loadChildren: "./danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule"
      },
      //Trang chi tiet
      {
        path: "chi-tiet-phim/:id", //id: tham số nhân từ url
        component: ChiTietPhimComponent
      },
      //Trang đặt vé xem phim
      {
        path: "chi-tiet-dat-ve/:maLichChieu",
        component: ChiTietDatVeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
