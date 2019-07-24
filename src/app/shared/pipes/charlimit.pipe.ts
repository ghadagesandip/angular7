import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charLimit'
})
export class CharlimitPipe implements PipeTransform {

  constructor() {
    console.log('pipe loaded');
  }
  transform(value: string, limit: number = 200): string {
    console.log('called pipe');
    if (value.length > limit) {
      return `${value.slice(0, limit)} ...`;
    } else {
      return value.slice(0, limit);
    }
  }

}
