import * as moment from 'moment';

export function getShortDateTimeStr(dateVal: number | string | Date) {
  if (typeof dateVal === 'number') {
      if (dateVal < 1000000000000) { // js timestamp
          dateVal *= 1000;
      }
  }
  return moment(dateVal).format('YY-MM-DD hh:mm A');
}

export function toHHmmss(seconds: number) {
  return `${(~~(seconds / (60 * 60)) + '').padStart(2, '0')}:${(~~((seconds / 60) % 60) + '').padStart(2, '0')}:${(~~(seconds % 60) + '').padStart(2, '0')}`;
}

