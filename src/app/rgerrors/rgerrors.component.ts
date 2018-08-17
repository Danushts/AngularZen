import { AbstractControl } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-rgerrors",
  templateUrl: "./rgerrors.component.html",
  styleUrls: ["./rgerrors.component.css"]
})
export class RgerrorsComponent {
  @Input()
  inputControl: AbstractControl;
  constructor() {}

  showErrors(): boolean {
    console.log(this.inputControl);
    return this.inputControl && 
      this.inputControl.errors &&
      (this.inputControl.dirty || this.inputControl.touched);
  }

  errors():string[]{
    return this.inputControl.errors['errorMsg'];
  }
}
