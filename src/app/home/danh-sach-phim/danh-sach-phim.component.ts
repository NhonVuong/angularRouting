import { Component, OnInit, Input } from '@angular/core';
import {PhimService} from "./../../_core/services/phim.service";
import{ QuanLyPhimService } from "./../../_core/services/quan-ly-phim.service";

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  danhSachPhim:any = [];

  constructor(private dataService:PhimService, private quanLyPhimService:QuanLyPhimService) { }

  ngOnInit() {
    this.getListMovie();
  }

  getListMovie(){
    // this.danhSachPhim = this.dataService.layDanhSachPhim();
    // console.log(this.danhSachPhim);

    this.quanLyPhimService.layDanhSachPhim().subscribe((data:any)=>{
      console.log(data);
      this.danhSachPhim = data;
    });
  }
}
