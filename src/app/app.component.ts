import { Component, OnInit, HostListener  } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  constructor(public httpClient:HttpClient) {}

	public config: PerfectScrollbarConfigInterface = {};

	public innerWidth: number=0;
	public defaultSidebar: string='';
	public showMobileMenu = false;
	public expandLogo = false;
	public sidebartype = 'full';

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.sidebartype = 'mini-sidebar';
    } else {
      this.sidebartype = this.defaultSidebar;
    }
  }

  toggleSidebarType() {
    switch (this.sidebartype) {
      case 'full':
        this.sidebartype = 'mini-sidebar';
        break;

      case 'mini-sidebar':
        this.sidebartype = 'full';
        break;

      default:
    }
  }




}
