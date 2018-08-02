import { Directive,Renderer,ElementRef, Input, HostListener } from '@angular/core';


@Directive({
  selector: '[appZencolor]'
})
export class ZencolorDirective {
  @HostListener('window:keyup',['$event'])
  respondToKeys(event:KeyboardEvent){
    console.log(event);
    if(event.key=='ArrowRight'){
        this.renderer.setElementStyle(this.el.nativeElement,'color',"cyan");
        this.renderer.setElementStyle(this.el.nativeElement,'border',"14px solid cyan");
        this.renderer.setElementStyle(this.el.nativeElement,'margin-left',"100px");
    }
    if(event.key=='ArrowLeft'){
      this.renderer.setElementStyle(this.el.nativeElement,'color',"magenta");
        this.renderer.setElementStyle(this.el.nativeElement,'border',"14px solid red");
        this.renderer.setElementStyle(this.el.nativeElement,'margin',"10px");
    }
    if(event.key=='r'){
      this.renderer.setElementStyle(this.el.nativeElement,'color',"grey");
        this.renderer.setElementStyle(this.el.nativeElement,'border-color',"grey");
        this.renderer.setElementStyle(this.el.nativeElement,'margin',"10px");
    }
  }

  @Input() appZencolor:string;

  constructor(private renderer:Renderer , private el:ElementRef) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var ob = JSON.parse(this.appZencolor)
    console.log(this.appZencolor);
    this.renderer.setElementStyle(this.el.nativeElement,'margin','10px');
    this.renderer.setElementStyle(this.el.nativeElement,'color',"grey");
    this.renderer.setElementStyle(this.el.nativeElement,'border',ob.border+' solid '+ob.color);
    this.renderer.setElementStyle(this.el.nativeElement,'padding',ob.padding);
    this.renderer.setElementStyle(this.el.nativeElement,'font-size','2em');
  }

}
