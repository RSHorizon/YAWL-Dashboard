import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'time-input',
    templateUrl: 'time-input.component.html'
})
export class TimeInputComponent {

  @Input()
  // @ts-ignore
  public time : number;

	@Output()
	timeChange = new EventEmitter();

  // @ts-ignore
	public days : number;
  // @ts-ignore
	public hours : number;
  // @ts-ignore
	public mins : number;
  // @ts-ignore
	public secs : number;


	ngOnChanges() {
		if(!this.time) {
			this.time = 0;
		}
		this.calculate();
	}


	calculate() {
		this.secs = this.time%60;
		this.mins = Math.floor(this.time/60);
		this.hours = Math.floor(this.mins/60);
		this.mins = this.mins%60;
		this.days = Math.floor(this.hours/24);
		this.hours = this.hours%24;
	}


	onInputSecs(secs: number) {
		this.secs = secs;
		this.onInput();
	}

	onInputMins(mins: number) {
		this.mins = mins;
		this.onInput();
	}

	onInputHours(hours: number) {
		this.hours = hours;
		this.onInput();
	}

	onInputDays(days: number) {
		this.days = days;
		this.onInput();
	}


	onInput() {
		this.time = 0;
		this.time += this.secs;
		this.time += this.mins*60;
		this.time += this.hours*60*60;
		this.time += this.days*60*60*24;

		this.timeChange.emit(this.time);
	}

}
