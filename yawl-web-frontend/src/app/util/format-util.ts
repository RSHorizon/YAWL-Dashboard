import {Participant} from "../yawl/resources/entities/participant.entity";

/**
 * @author Robin Steinwarz
 */

export class FormatUtils {

  getTimestampFromDuration(start: Date, end: Date): number {
    // @ts-ignore
    return Math.abs(start - end);
  }

  applyPastTimeFormatForTimestamp(timestamp: number): string {
    // @ts-ignore
    if(timestamp === undefined || timestamp === ''){
      timestamp = 0;
    }
    // @ts-ignore
    let hoursMs = timestamp
    let minutesMs = timestamp % (1000 * 60 * 60)
    let secondsMs = timestamp % (1000 * 60)

    let hours = Math.floor(hoursMs / (1000 * 60 * 60))
    let minutes = Math.floor(minutesMs / (1000 * 60))
    let seconds = Math.floor(secondsMs / (1000))

    return hours + "h " + minutes + "m " + seconds + "s";
  }

  applyPastTimeFormatForTimestampWithDays(timestamp: number){
    let daysMs = timestamp
    let hoursMs = daysMs % (1000 * 60 * 60 * 24)
    let minutesMs = hoursMs % (1000 * 60 * 60)
    let secondsMs = hoursMs % (1000 * 60)

    let days = Math.floor(daysMs / (1000 * 60 * 60 * 24))
    let hours = Math.floor(hoursMs / (1000 * 60 * 60))
    let minutes = Math.floor( minutesMs / (1000 * 60))
    let seconds = Math.floor(secondsMs / (1000))

    return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  }



  applyDatetimeFormat(timestamp: number): string {
    if (timestamp === 0) {
      return ""
    }
    let date = new Date(timestamp);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return months[date.getMonth()] + ".:" + date.getDate() + ", " + date.getFullYear() + " " + date.toLocaleTimeString()
  }

  applyParticipantsArrayFormat(participants: Participant[]): string {
    if (participants === undefined) {
      return "";
    }

    let chain = "";
    participants.forEach(participant => {
      chain += ", " + participant.firstname + " " + participant.lastname
    })
    return chain.substring(2);
  }

  applyOccurencesFormat(occurences: number[]): string {
    if (occurences.length != 8) {
      return "";
    }

    return "M" + occurences[0] + " T" + occurences[1] + " W" + occurences[2] + " T" + occurences[3] + " F" + occurences[4] + " S" + occurences[5] + " S" + occurences[6] + ""
  }

  applyIsOverdueFormat(age: number, maxTime: number): string {
    if (age > maxTime) {
      return "Yes";
    } else {
      return "No";
    }
  }

  applyBooleanFormat(bool: boolean) {
    return (bool) ? "Yes" : "No";
  }

}
