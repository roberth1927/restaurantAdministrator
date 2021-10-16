import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteInfo } from './sidebar.metadata';
import { ROUTES } from './menu-items';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems:RouteInfo[]=[];
  // this is for the open close
  addExpandClass(element: string) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
  this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
  }
}
