import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeleft'
})
export class TimeleftPipe implements PipeTransform {

  transform(date: Date, ...args: unknown[]): any {
    if (date) {
      const seconds = Math.floor((+new Date() - +new Date(date)) / 1000);
      if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
          return 'Just now';
      const intervals = {
          'year': 31536000,
          'month': 2592000,
          'week': 604800,
          'day': 86400,
          'hour': 3600,
          'minute': 60,
          'second': 1
      };
      let counter;
      for (const i in intervals) {
          counter = Math.floor(seconds / intervals[i]);
          if (counter > 0)
              if (counter === 1) {
                  return counter + ' ' + i + ' ago'; // singular (1 day ago)
              } else {
                  return counter + ' ' + i + 's ago'; // plural (2 days ago)
              }
      }
  }
  return date;
  }
}

  //var countDownDate = new Date(date).getTime();    
  //   var now = new Date().getTime();
  //   var distance = now - countDownDate ;
  //   // Time calculations for days, hours, minutes and seconds
  //   var days = Math.floor(distance/ (1000 * 60 * 60 * 24));
  //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   return hours + " heures " + minutes + " min " + seconds + " sec";
