import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent  {

  @Output()
  toggleSidebar = new EventEmitter<void>();

  public showSearch = false;


}
