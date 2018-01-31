import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
    selector: '[appHoverCardOrder]'
})
export class HoverCardOrderDirective{

    @HostBinding('class.hoveredCardOrder') isHovered = false;

    @HostListener('mouseenter') onMouseEnter() {
        this.isHovered = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.isHovered = false;
    }

}