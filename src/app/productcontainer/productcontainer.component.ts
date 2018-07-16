import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcontainer',
  templateUrl: './productcontainer.component.html',
  styleUrls: ['./productcontainer.component.css']
})
export class ProductcontainerComponent implements OnInit {

  ProductName : string = "Tshirt";
  products : any[];
  constructor() {
    this.products = [{ name: "T-shirt", Price: "200"},{ name: "Paint", Price: "2000"},];
   }

  ngOnInit() {
    
  }


}
