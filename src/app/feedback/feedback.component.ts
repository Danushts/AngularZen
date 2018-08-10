import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"]
})
export class FeedbackComponent implements OnInit {
  @ViewChild("boxnew") 
  boxvar: ElementRef;      
  public inputCreated = false;
  hideTick = true;
  // tickArray = [{ tick: true }, { tick: true }, { tick: true }];
  tickObject = [
    {
      title:'course',
      buttonArray: [
        { tick: true ,text:'In-Depth Explanation' },
        { tick: true,text:'Swift pace' }, 
        { tick: true,text:'Englightening' }
      ]
    },
    {
      title:'instructor',
      buttonArray: [
        { tick: true ,text:'In-Depth Explanation1' },
        { tick: true,text:'Swift pace1' }, 
        { tick: true,text:'Englightening1' }
      ]
    },
    {
      title:'improvement',
      buttonArray: [
        { tick: true ,text:'In-Depth Explanation2' },
        { tick: true,text:'Swift pace2' }, 
        { tick: true,text:'Englightening2' }
      ]
    }
    // instructor: [{ tick: true }, { tick: true }, { tick: true }],
    // improvement: [{ tick: true }, { tick: true }, { tick: true }]
  ];
  constructor(private rendererOb: Renderer2,private routerService:ActivatedRoute) {}

  ngOnInit() {
    alert(this.routerService.snapshot.params['id']);
  }

  toggeleTick(outerIndex, index) {
    // this.hideTick=!this.hideTick;
    this.tickObject[outerIndex]['buttonArray'][index].tick = !this.tickObject[outerIndex]['buttonArray'][index].tick;
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
