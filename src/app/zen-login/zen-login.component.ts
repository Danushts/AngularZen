import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zen-login',
  templateUrl: './zen-login.component.html',
  styleUrls: ['./zen-login.component.css']
})
export class ZenLoginComponent implements OnInit {

  userName:String;
  password:string;
  errorMsg:string;

  constructor(private routerService:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.routerService.snapshot.params['msg']);
    this.errorMsg = this.routerService.snapshot.params['msg'];
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
