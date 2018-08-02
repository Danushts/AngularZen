import { Directive,Renderer,ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appZencolor]'
})
export class ZencolorDirective {

  @Input() appZencolor:string;

  constructor(private renderer:Renderer , private el:ElementRef) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var ob = JSON.parse(this.appZencolor)
    console.log(this.appZencolor);
    this.renderer.setElementStyle(this.el.nativeElement,'margin','10px');
    this.renderer.setElementStyle(this.el.nativeElement,'color',ob.color);
    this.renderer.setElementStyle(this.el.nativeElement,'border','2px solid '+ ob.color);
    this.renderer.setElementStyle(this.el.nativeElement,'padding',ob.padding);
    this.renderer.setElementStyle(this.el.nativeElement,'font-size','2em');
  }

}
