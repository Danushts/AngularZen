import { Directive,TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[zenIf]'
})
export class ZenIfDirective {
  @Input() zenIf:boolean;
  showHide=false;
  constructor(private templateRefOb:TemplateRef<any>,
  private viewContainerRefOb:ViewContainerRef) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.zenIf){
      this.viewContainerRefOb.createEmbeddedView(this.templateRefOb);
    }
    else{
      this.viewContainerRefOb.clear();
    }
    
  }

}
