import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})

export class Highlight {

  constructor(private eleRef: ElementRef) {
    console.log("Highlight");
    
   }

   @HostListener('mouseenter')
   onHover() {
    this.eleRef.nativeElement.style.color = 'red';
   }

   @HostListener('mouseleave')
   onHoverLeft() {
    this.eleRef.nativeElement.style.color = 'black';
   }

}