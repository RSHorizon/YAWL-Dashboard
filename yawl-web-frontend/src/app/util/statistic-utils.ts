import {FormGroup} from "@angular/forms";
import {CaseStatistic} from "../yawl/resources/dto/case-statistic.entity";

/**
 * @author Robin Steinwarz
 */

export class StatisticUtils {

  static monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  static weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  static notCancelledAndCompleted(caseStatistic: CaseStatistic): boolean{
    return !caseStatistic.cancelled && caseStatistic.end !== 0;
  }


  static timestampIsInDateRange(timestamp: number, range: FormGroup): boolean {
    let start = range.value.start?.getTime();
    let end = range.value.end?.getTime();

    if (timestamp > start! && timestamp < end!) {
      return true;
    }
    return false;
  }

  static tickBuffer: Map<string, {year: number, month: number}[]> = new Map();
  static calculateStatisticTicks(range: FormGroup, fineness: string): { year: number, month: number }[] {
    let start = range.value.start!;
    let end = range.value.end!;
    let bufferLabel = start.getTime() + " " + end.getTime() + " " + fineness;
    if(this.tickBuffer.has(bufferLabel)){
      return this.tickBuffer.get(bufferLabel)!;
    }
    let startYear = start.getFullYear();
    let startMonth = start.getMonth();
    let endYear = end.getFullYear();
    let endMonth = end.getMonth();
    let dates: { year: number, month: number }[] = [];

    if (fineness === 'month') {
      for (let i = startYear; i <= endYear; i++) {
        let startMonthIndex = (i === startYear) ? startMonth : 0;
        let endMonthIndex = (i != endYear) ? 11 : endMonth;
        for (let j = startMonthIndex; j <= endMonthIndex; j++) {
          dates.push({year: new Date(i,0).getTime(), month: new Date(i,j).getTime()});
        }
      }
    } else {
      for (let i = startYear; i <= endYear; i++) {
        dates.push({year: new Date(i,0).getTime(), month: 0});
      }
    }
    this.tickBuffer.set(bufferLabel, dates);
    return dates;
  }

  static preventNullStatistic(array: Object[], series = false): void {
    const emptyStatistic = {
      name: "None",
      series: [{
        name: "None",
        value: 0
      }]
    }
    const emptyNormalStatistic = {
      name: "None",
      value: 0
    }
    if(series && array.length === 0){
      array.push(emptyStatistic);
    } else if (!series && array.length === 0){
      array.push(emptyNormalStatistic);
    }
  }

  static changeMap(map: Map<string, number>, id: string, change: number){
    if (!map.has(id)) {
      map.set(id, 0);
    }
    map.set(id, map.get(id)! + change);
  }
}
