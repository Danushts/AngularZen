import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  pName="Arjun"
  constructor() { }

  ngOnInit() {
  }

  submimtForm(formData:NgForm){
    console.log(formData);
  }

}
