import { DataTransferService } from './data-transfer.service';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public dataTransferService: DataTransferService) {}

  title = 'site-fabiola';

  isMenuHidden = true;

  logo = '';

  public screenWidth: Number = 0;
  public screenHeight: Number = 0;


  changeMenuHiddenStatus() {
    this.isMenuHidden = !this.isMenuHidden;
  }
  closeMenu(){
    this.isMenuHidden = true;
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 420) {
      this.logo = 'logo';
      this.dataTransferService.bannerHome = 'banner-home-horizontal';
    } else {
      this.logo = 'logo1';
      this.dataTransferService.bannerHome = 'banner-home-vertical';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 420) {
      this.logo = 'logo';
      this.dataTransferService.bannerHome = 'banner-home-horizontal';
    } else {
      this.logo = 'logo1';
      this.dataTransferService.bannerHome = 'banner-home-vertical';
    }
  }

}
