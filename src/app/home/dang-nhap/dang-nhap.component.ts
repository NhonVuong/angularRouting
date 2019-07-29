import { Component, OnInit } from '@angular/core';
import { NguoiDungService } from 'src/app/_core/services/nguoi-dung.service';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  constructor(private nguoiDungService:NguoiDungService) { }

  ngOnInit() {
  }

  dangNhap(frmValue:any){
    //goi service dang nhap
    this.nguoiDungService.dangNhap(frmValue.taiKhoan, frmValue.matKhau).subscribe((data)=>{
      console.log(data);
      //luu vao token
      localStorage.setItem('userLogin', JSON.stringify(data));
      localStorage.setItem('accessToken', data.accessToken);
    },error=>{
      alert(error.error);
      
    })
    console.log(frmValue);
    
  }
}
