import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  name:any;
  expiryDate;
  dateFormat;
  timeZone;
  constructor() {
    let dateOb =new Date();
    this.expiryDate = dateOb.getTime();
   }

  ngOnInit() {
  }

}
