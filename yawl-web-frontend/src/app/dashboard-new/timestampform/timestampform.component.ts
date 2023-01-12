import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timestampform',
  templateUrl: './timestampform.component.html',
  styleUrls: ['./timestampform.component.css']
})
export class TimestampformComponent implements OnInit {

  @Input()  timestamp: number| undefined;
  @Output() timestampChange = new EventEmitter<number>();

  hours: number= 0;
  minutes: number= 0;

  hourNumbers = Array(24).fill(0).map((x,i)=>i);
  minuteNumbers = Array(60).fill(0).map((x,i)=>i);

  constructor() {}

  ngOnInit(): void {
    this.applyPastTimeFormatForTimestamp();
  }

  applyPastTimeFormatForTimestamp(){
    if(this.timestamp === undefined){
      return;
    }

    let hoursMs = this.timestamp;
    let minutesMs = hoursMs % (1000 * 60 * 60)

    this.hours = Math.floor(hoursMs / (1000 * 60 * 60))
    this.minutes = Math.floor( minutesMs / (1000 * 60))
  }

  change(){
    let newTimestamp: number = (this.hours * (1000 * 60 * 60)) + (this.minutes * (1000 * 60));
    this.timestampChange.emit(newTimestamp);
  }
}
