import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  @ViewChild('boxnew') boxvar:ElementRef;
  show=true;
  constructor(private rendererOb:Renderer2) { }

  ngOnInit() {
  }

  addInputBox(){
    this.show=false;
    console.log(this.boxvar);
    let inputBox = this.rendererOb.createElement('input');
    this.rendererOb.appendChild(this.boxvar.nativeElement,inputBox);

    let checkBox = this.rendererOb.createElement('input');
    this.rendererOb.setAttribute(checkBox,'type','checkbox')
    this.rendererOb.appendChild(this.boxvar.nativeElement,checkBox);
  }

}
