import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {
  @HostBinding('style.backgroundColor') 
  bgcolor = 'white' 
  @HostBinding('style.color')
  color = 'black' 

  constructor() { }

  @HostListener('mouseenter') mouseenter(){
    this.bgcolor = "grey" 
    this.color  = "white"
  }
  @HostListener('mouseleave') mouseleave(){
    this.bgcolor = "white" 
    this.color  = "black"
  }
}
