import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-timestampform',
  templateUrl: './timestampform.component.html',
  styleUrls: ['./timestampform.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimestampformComponent implements OnInit, OnChanges {
  @Input() monthSelectionActive: boolean = false;
  @Input() timestamp: number | undefined;
  @Input() enabled: boolean | undefined;
  @Output() timestampChange = new EventEmitter<number>();
  @Output() timestampChanged = new EventEmitter<number>();
  months: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;

  ngOnInit(): void {
    this.applyPastTimeFormatForTimestamp();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.applyPastTimeFormatForTimestamp();
  }

  applyPastTimeFormatForTimestamp() {
    if (this.timestamp === undefined) {
      return;
    }

    let monthMs = this.timestamp;
    let daysMs = monthMs % (2505600000)
    let hoursMs = daysMs % (86400000)
    let minutesMs = hoursMs % (3600000)

    this.months = Math.floor(monthMs / 2505600000)
    this.days = Math.floor(daysMs / 86400000)
    this.hours = Math.floor(hoursMs / 3600000)
    this.minutes = Math.floor(minutesMs / 60000)
  }

  change() {
    let newTimestamp: number = (this.months * (2505600000) + this.days * 86400000) + (this.hours * 3600000) + (this.minutes * 60000);
    this.timestampChange.emit(newTimestamp);
    this.timestampChanged.emit(newTimestamp);
  }
}
