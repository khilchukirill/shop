import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  color: string = '#90AFC5';

  @HostBinding('style.backgroundColor') elColor: string | null;
  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color
}
  @HostListener('mouseleave') onLeave() {
    this.elColor = null
}

}
