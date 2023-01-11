import { Directive, OnInit, Input, ElementRef} from '@angular/core';



@Directive({
	selector: '[dragchild]'
})
export class DragChildDirective implements OnInit {

	@Input('dragparent')
	draggableParent : any;


	constructor(private elementRef: ElementRef) {
	}


	ngOnInit() {
		let parentElement : any;
		if(this.draggableParent) {
			parentElement = this.draggableParent;
		} else {
			parentElement = this.elementRef.nativeElement.parentElement;
		}

		parentElement.draggable = false;

		this.elementRef.nativeElement.addEventListener('mouseenter', () => {
			parentElement.draggable = true;
		});

		this.elementRef.nativeElement.addEventListener('mouseleave', () => {
			parentElement.draggable = false;
		});
	}
}
