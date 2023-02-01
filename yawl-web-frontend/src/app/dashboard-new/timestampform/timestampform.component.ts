import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-timestampform',
  templateUrl: './timestampform.component.html',
  styleUrls: ['./timestampform.component.css']
})
export class TimestampformComponent implements OnInit, OnChanges {

  @Input()  daySelectionActive: boolean = false;

  @Input()  timestamp: number| undefined;
  @Output() timestampChange = new EventEmitter<number>();

  @Output() timestampChanged = new EventEmitter<number>();

  days: number= 0;
  hours: number= 0;
  minutes: number= 0;

  dayNumbers = Array(30).fill(0).map((x,i)=>i);
  hourNumbers = Array(24).fill(0).map((x,i)=>i);
  minuteNumbers = Array(60).fill(0).map((x,i)=>i);

  constructor() {}

  ngOnInit(): void {
    this.applyPastTimeFormatForTimestamp();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.applyPastTimeFormatForTimestamp();
  }

  applyPastTimeFormatForTimestamp(){
    if(this.timestamp === undefined){
      return;
    }
    let daysMs = this.timestamp
    let hoursMs = daysMs % (1000 * 60 * 60 * 24)
    let minutesMs = hoursMs % (1000 * 60 * 60)

    this.days = Math.floor(daysMs / (1000 * 60 * 60 * 24))
    this.hours = Math.floor(hoursMs / (1000 * 60 * 60))
    this.minutes = Math.floor( minutesMs / (1000 * 60))
  }

  change(){
    let newTimestamp: number = (this.days * (1000 * 60 * 60 * 24)) + (this.hours * (1000 * 60 * 60)) + (this.minutes * (1000 * 60));
    this.timestampChange.emit(newTimestamp);
    this.timestampChanged.emit(newTimestamp);
  }
}
