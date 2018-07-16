import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zen-login',
  templateUrl: './zen-login.component.html',
  styleUrls: ['./zen-login.component.css']
})
export class ZenLoginComponent implements OnInit {

  userName:String;
  password:string;

  constructor() { }

  ngOnInit() {
  }

  doLogin(){
    if(this.userName == null){
      alert("Enter user Name");
    }
    else if(this.password == null){
      alert("Enter Password");
    }
    else{
      alert("everything all right");
    }
  }
}
