import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zeninformation',
  templateUrl: './zeninformation.component.html',
  styleUrls: ['./zeninformation.component.css']
})
export class ZeninformationComponent implements OnInit {

  Name: string;
  Age: string;
  Tecnologies: string[];

  constructor() {
    this.Name = "Zenrays";
    this.Age = "10 Yer";
    this.Tecnologies= ['Angular', 'C#', 'Java'];
    alert("i am in constructor");
   }

  ngOnInit() {
    alert("i am in ngInit");
  }

}
