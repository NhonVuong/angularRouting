import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {

  @Input() gheInput:any = {};
  dangDat:boolean = false;
  @Output() suKienDatGhe = new EventEmitter();

  constructor(private qlyPhimService:QuanLyPhimService) { }

  ngOnInit() {
  }

  datGhe(){
    this.dangDat = !this.dangDat;
    //dat ghe gui du lieu ghe dang dat len service
   let gheDangDat:any={
    maGhe:this.gheInput.maGhe,
    stt:this.gheInput.stt,
    giaVe:this.gheInput.giaVe,
    dangDat:this.dangDat
   }
   //gui len thong qua phuong thuc datGhe() cua service
    this.qlyPhimService.datGhe.emit(gheDangDat);
  }


}
