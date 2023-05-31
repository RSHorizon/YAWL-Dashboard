import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormatUtils} from "../../util/format-util";
/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-timestampform',
  templateUrl: './timestampform.component.html',
  styleUrls: ['./timestampform.component.css']
})
export class TimestampformComponent implements OnInit, OnChanges {

  @Input()  monthSelectionActive: boolean = false;

  @Input()  timestamp: number| undefined;
  @Output() timestampChange = new EventEmitter<number>();

  @Output() timestampChanged = new EventEmitter<number>();
  months: number= 0;
  days: number= 0;
  hours: number= 0;
  minutes: number= 0;

  monthNumbers = Array(25).fill(0).map((x,i)=>i);
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

    let monthMs = this.timestamp;
    let daysMs = monthMs % (1000 * 60 * 60 * 24 * 29)
    let hoursMs = daysMs % (1000 * 60 * 60 * 24)
    let minutesMs = hoursMs % (1000 * 60 * 60)

    this.months = Math.floor(monthMs / (1000 * 60 * 60 * 24 * 29))
    this.days = Math.floor(daysMs / (1000 * 60 * 60 * 24))
    this.hours = Math.floor(hoursMs / (1000 * 60 * 60))
    this.minutes = Math.floor( minutesMs / (1000 * 60))
  }

  change(){
    let newTimestamp: number = (this.months * (1000 * 60 * 60 * 24 * 29) + this.days * (1000 * 60 * 60 * 24)) + (this.hours * (1000 * 60 * 60)) + (this.minutes * (1000 * 60));
    this.timestampChange.emit(newTimestamp);
    this.timestampChanged.emit(newTimestamp);
  }
}
