import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string = "arjun";
  password: string = "arjunarjun";
  student: any;
  age: number = 10;
  borderValue:number=4;
  errorMsg:string
  
  constructor(private routerService:ActivatedRoute) {
    var that = this ;
    setTimeout(function() {
      that.student = {
        firstName: "Daisy11",
        age: 20
      };
    }, 4000);
  }

  ngOnInit() {
    this.errorMsg = this.routerService.snapshot.params['msg'];
  }
  doLogin() {
    if (this.username == undefined) {
      alert("username can't be empty");
    } else if (this.password == undefined) {
      alert("password cant be empty");
    } else {
      alert("Hey i am logging you!");
    }
  }
}
