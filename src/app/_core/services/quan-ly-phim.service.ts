import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

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