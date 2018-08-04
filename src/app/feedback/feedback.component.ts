import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"]
})
export class FeedbackComponent implements OnInit {
  @ViewChild("boxnew") boxvar: ElementRef;
  public inputCreated = false;
  hideTick = true;
  // tickArray = [{ tick: true }, { tick: true }, { tick: true }];
  tickObject = {
    course: [{ tick: true }, { tick: true }, { tick: true }],
    instructor: [{ tick: true }, { tick: true }, { tick: true }],
    improvement: [{ tick: true }, { tick: true }, { tick: true }]
  };
  constructor(private rendererOb: Renderer2) {}

  ngOnInit() {}

  toggeleTick(property, index) {
    // this.hideTick=!this.hideTick;
    this.tickObject[property][index].tick = !this.tickObject[property][index].tick;
  }

  addInputBox() {
    console.log(this.boxvar);
    if (!this.inputCreated) {
      let inputBox = this.rendererOb.createElement("input");
      this.rendererOb.setAttribute(inputBox, "placeholder", "Other");
      this.rendererOb.appendChild(this.boxvar.nativeElement, inputBox);
      this.inputCreated = true;
    }

    // let checkBox = this.rendererOb.createElement('input');
    // this.rendererOb.setAttribute(checkBox,'type','checkbox')
    // this.rendererOb.appendChild(this.boxvar.nativeElement,checkBox);
  }
}
