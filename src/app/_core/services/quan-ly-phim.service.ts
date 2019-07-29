import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

  @Output() datGhe = new EventEmitter();
  // public storeGheDangDat = new BehaviorSubject([]); //{} la gia tri ban dau mac dinh cua store
  // danhSachGheDangDat = this.storeGheDangDat.asObservable();

  // datGhe(thongTinGheDangDat:any){
    // console.log('thong tin dat ghe', thongTinGheDangDat);
    // let dsGheDangDat = [];

    // //lay mang ghe dang dat trong store ra
    // this.danhSachGheDangDat.toPromise().then((mangGheDangDat:any)=>{
    //   dsGheDangDat = mangGheDangDat;
    //   if(thongTinGheDangDat.dangDat){
    //     dsGheDangDat.push(thongTinGheDangDat);
    //   }else{
    //     let index = dsGheDangDat.findIndex(ghe => ghe.maGhe === thongTinGheDangDat.maGhe)
    //     if(index !== -1){
    //       dsGheDangDat.splice(index, 1)
    //     }
    //   }
    //   //cap nhat lai mang ghe trong store
    //   this.storeGheDangDat.next(thongTinGheDangDat);
    // })
    //xu ly nghiep vu dat ghe => làm thay đổi du liệu danhSachGheDangDat tu store
    
    
  // }

  constructor(private http:HttpClient) { 

  }


  layDanhSachPhim():Observable<any>{
    const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02";
    return this.http.get(url).pipe(
      tap(() => {
        //Loading
        }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  layChiTietPhim(maPhim:number):Observable<any>{
    const url = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return this.http.get(url).pipe(
      tap(() => {

        }),
      catchError(err => {
        console.log(err.error)
        return this.handleError(err);
      })
    );
  }

  layThongTinLichChieuPhim(maLichChieu:Observable<any>){
    const url = `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return this.http.get(url).pipe(
      tap(() => {

        }),
      catchError(err => {
        console.log(err.error)
        return this.handleError(err);
      })
    );
  }

  handleError(err){
    if(err.codeStatus === 404){
      alert(err.message);
    }
    return err;
  }
}