import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  ProductName : string = "Tshirt";
  products : any[];
  constructor() {
    this.products = [{ name: "T-shirt", Price: "200"},{ name: "Paint", Price: "2000"},];
   }

  ngOnInit() {
  }

}
