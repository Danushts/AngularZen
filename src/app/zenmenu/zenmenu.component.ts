import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zenmenu',
  templateUrl: './zenmenu.component.html',
  styleUrls: ['./zenmenu.component.css']
})
export class ZenmenuComponent implements OnInit {
  menuItems:string[];
  constructor() { 
    this.menuItems=['Home','About','Services','Our Team','Contact Us'];
  }

  ngOnInit() {
  }

}
