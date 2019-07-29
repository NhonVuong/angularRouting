import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {

  constructor(private http:HttpClient){

  }

  public dangNhap(taikhoan:string, matkhau:string):Observable<any>{
    let ttDangNhap = {
      "taiKhoan": taikhoan,
      "matKhau": matkhau
    }
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json-patch+json');
    const url ='http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap'
    let ob = this.http.post(url, ttDangNhap, {headers:header});
    return ob;
  }

}
