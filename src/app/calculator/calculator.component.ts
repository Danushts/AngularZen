import { CalService } from './../cal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],

})
export class CalculatorComponent implements OnInit {

  constructor(private serviceOb:CalService,private routeSrvice:ActivatedRoute) { }

  ngOnInit() {
    this.routeSrvice.snapshot.params['name'];
  }

  doCalculation(a,b){
    alert(this.serviceOb.add(a,b));
    alert(this.serviceOb.mul(a,b));
  }


}
