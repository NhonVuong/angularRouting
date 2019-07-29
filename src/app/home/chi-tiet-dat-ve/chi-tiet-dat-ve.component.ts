import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuanLyPhimService } from "src/app/_core/services/quan-ly-phim.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-chi-tiet-dat-ve",
  templateUrl: "./chi-tiet-dat-ve.component.html",
  styleUrls: ["./chi-tiet-dat-ve.component.scss"]
})
export class ChiTietDatVeComponent implements OnInit, OnDestroy {
  constructor(
    private atvRoute: ActivatedRoute,
    private qlyPhimService: QuanLyPhimService
  ) {}

  maLichChieu: number = 0;
  subPrams: Subscription;
  subService: Subscription;
  lichChieu: any = {};
  danhSachGheDangDat:any[] = [];
  tongTien:number = 0;

  ngOnDestroy() {
    this.subPrams.unsubscribe();
    this.subService.unsubscribe();
  }

  ngOnInit() {
    //lay tham so ma lich chieu tu url
    this.subPrams = this.atvRoute.params.subscribe(param => {
      console.log(param);
      // this.maLichChieu = param.maLichChieu;
      //goi service lay lich chieu phong ve
      this.layThongTinLichChieu(param.maLichChieu);
    });

    // du lieu ghe dang dat duoc lay tu service
    this.qlyPhimService.datGhe.subscribe((gheDangDat)=>{
     // xu ly ghe dang dat tai ham subscribe tu output cua sẻvice
     if(gheDangDat.dangDat){
          this.danhSachGheDangDat.push(gheDangDat);
        }else{
          let index = this.danhSachGheDangDat.findIndex(ghe => ghe.maGhe === gheDangDat.maGhe)
          if(index !== -1){
            this.danhSachGheDangDat.splice(index, 1)
          }
        }
        console.log('mang ghe dang dat', this.danhSachGheDangDat);
        this.tinhTongTien();
    })


  }

  tinhTongTien(){
    let tongTien = 0;
    this.danhSachGheDangDat.forEach((ghe, index)=>{
      tongTien += ghe.giaVe;
    });
    this.tongTien = tongTien;
  }

  layThongTinLichChieu(maLichChieu) {
    this.subService = this.qlyPhimService
      .layThongTinLichChieuPhim(maLichChieu)
      .subscribe(data => {
        console.log(data);
        //gan du lieu tu backend ve vao lichChieu => hien thi danh sach ghe ra giao dien
        this.lichChieu = data;
      });
  }


}
