import { Component, OnInit } from "@angular/core";

@Component({
  selector: "zeninformation",
  templateUrl: "./zeninformation.component.html",
  styleUrls: ["./zeninformation.component.css"]
})
export class ZeninformationComponent implements OnInit {
  name: string;
  age: string;
  technologies: string[];
  constructor() { 
    this.name = "Zenrays Technologies Pvt Ltd";
    this.age = "10";
    this.technologies = [
      "Angular",
      "react",
      "nodeJs",
      "ExpressJs",
      "AI",
      "python"
    ];
    console.log("I am a constructor");
  }

  ngOnInit() {
    console.log("I am a ngOnInit");
  }
}
