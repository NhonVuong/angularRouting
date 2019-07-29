import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuanLyPhimService } from "src/app/_core/services/quan-ly-phim.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-chi-tiet-phim",
  templateUrl: "./chi-tiet-phim.component.html",
  styleUrls: ["./chi-tiet-phim.component.scss"]
})
export class ChiTietPhimComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private quanLyPhimService: QuanLyPhimService
  ) {}

  public maPhim: number = 0;
  public chiTietPhim: any = {};
  subPrams: Subscription;
  subService: Subscription;

  ngOnDestroy() {
    this.subPrams.unsubscribe();
    this.subService.unsubscribe();
  }

  ngOnInit() {
    //lay tham so tu url
    this.subPrams = this.activatedRoute.params.subscribe(prams => {
      this.maPhim = prams.id; //id la ten tham so dinh nghia o home-routing.module /:id
      this.layThongTinChiTietPhim(this.maPhim);
    });
  }

  layThongTinChiTietPhim(maPhim:number) {
    this.subService = this.quanLyPhimService
      .layChiTietPhim(maPhim)
      .subscribe(data => {
        console.log(data);
        this.chiTietPhim = data;
      });
  }
}
