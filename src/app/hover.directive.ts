import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
/*
Directive in angular are used for to change the behavior of element in the 
component's DOM
it is helper funtion for a component to change the beheviour of an element in a
component. we can use ElementRef
*/
@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  // @Input() color: string = 'red';
  //using the same variable name of the selecter name avoids extra variable like
  //shown in the line of code above
    @Input() appHover: string = 'red';
  
  // @Input() color2: string = 'blue';
  constructor(private elementref: ElementRef, private render2: Renderer2) { }
  ngOnInit(): void {
    console.log("this.elementref==========>>>>==");
    console.log(this.elementref.nativeElement);
    // this.elementref.nativeElement.style.backgroundColor=this.color;
    this.render2.setStyle(this.elementref.nativeElement,
      'backgroundColor', this.appHover);
  }
  @HostListener('mouseenter') onMounseEnter() {
    this.elementref.nativeElement.style.backgroundColor = 'green';
  }
  @HostListener('mouseleave') onMounseLeave() {
    this.elementref.nativeElement.style.backgroundColor = 'white';
  }

}
