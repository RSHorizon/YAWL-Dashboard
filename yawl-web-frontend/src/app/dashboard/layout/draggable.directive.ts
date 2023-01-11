import { Directive, OnInit, Input, Output, ElementRef, EventEmitter} from '@angular/core';



@Directive({
	selector: '[draggable]'
})
export class DraggableDirective implements OnInit {

	@Input('draggable')
	data : any;

	@Output()
	dragstart : EventEmitter<any> = new EventEmitter();

	@Output()
	dragend : EventEmitter<any> = new EventEmitter();


	constructor(private elementRef: ElementRef) {
	}


	ngOnInit() {
		let element = this.elementRef.nativeElement;

		element.draggable = 'true';

		element.addEventListener('dragstart', (e: { dataTransfer: { effectAllowed: string; setData: (arg0: string, arg1: string) => void; }; }) => {
			element.classList.add('drag-source')
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData('application/json', JSON.stringify(this.data));
			this.dragstart.emit(this.data);
		});

		element.addEventListener('dragend', (e: { preventDefault: () => void; }) => {
			e.preventDefault();
			element.classList.remove('drag-source');
			this.dragend.emit(this.data);
		});
	}
}
