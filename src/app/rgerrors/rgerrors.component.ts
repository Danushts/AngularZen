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

  errors(){
    let errors = Object.keys(this.inputControl.errors);
    let errorString = "Errors Are Following: "+errors.join(' And ');
    console.dir(this.inputControl.errors);
    return errorString;
    // return this.inputControl.errors['errorMsg'];
  }
}
