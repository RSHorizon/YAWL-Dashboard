import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
    selector: 'sidebar',
    template: `<ng-content></ng-content>`
})
export class SidebarComponent {

	opened : boolean = false;

	constructor(public el: ElementRef, public renderer: Renderer2) {}

	toggle(isOpen: boolean = !this.opened) {
		this.opened = isOpen;
		if(this.opened){
		  this.renderer.addClass(this.el.nativeElement, 'sidebar-visible')
    }else{
		  this.renderer.removeClass(this.el.nativeElement, 'sidebar-visible')
    }
	}
}
