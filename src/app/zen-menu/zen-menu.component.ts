import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zenmenu',
  templateUrl: './zen-menu.component.html',
  styleUrls: ['./zen-menu.component.css']
})
export class ZenMenuComponent implements OnInit {

  menuOptions: string[];

  constructor() {
    this.menuOptions=['Home', 'Aboutus', 'Help', 'logout'];
   }

  ngOnInit() {
  }

}
