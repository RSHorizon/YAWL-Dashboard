import { Directive, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';



@Directive({
	selector: '[droppable]'
})
export class DroppableDirective implements OnInit {

	@Output()
	dropped : EventEmitter<any> = new EventEmitter();



	constructor(private elementRef: ElementRef) {
	}


	ngOnInit() {
		let element = this.elementRef.nativeElement;

		element.addEventListener('dragenter', () => {
			element.classList.add('dropzone-over');
		});

		element.addEventListener('dragleave', () => {
			element.classList.remove('dropzone-over');
		});

		element.addEventListener('dragover', (e: { preventDefault: () => void; dataTransfer: { dropEffect: string; }; }) => {
			if(e.preventDefault) {
				e.preventDefault();
			}

			e.dataTransfer.dropEffect = 'move';
			return false;
		});


		element.addEventListener('drop', (e: { stopPropagation: () => void; dataTransfer: { getData: (arg0: string) => any; }; }) => {
			if(e.stopPropagation) {
				e.stopPropagation();
			}

			element.classList.remove('dropzone-over');

			let dataRaw = e.dataTransfer.getData('application/json');
			if(dataRaw) {
				let data = JSON.parse(dataRaw);
				this.dropped.emit(data);
			} else {
				console.log("No drop data!");
			}
			return false;
		})
	}
}
