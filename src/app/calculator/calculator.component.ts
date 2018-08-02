import { CalService } from './../cal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],

})
export class CalculatorComponent implements OnInit {

  constructor(private serviceOb:CalService) { }

  ngOnInit() {
  }

  doCalculation(a,b){
    alert(this.serviceOb.add(a,b));
    alert(this.serviceOb.mul(a,b));
  }


}
