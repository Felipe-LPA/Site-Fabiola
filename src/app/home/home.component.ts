import { DataTransferService } from './../data-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public dataTransferService:DataTransferService) { }
  
  banner = this.dataTransferService.bannerHome

  showBannerValue(){
    console.log(this.banner)
  }
  ngOnInit(): void {
  }

}
