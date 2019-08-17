import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charLimit'
})
export class CharlimitPipe implements PipeTransform {

  constructor() {
  }
  transform(value: string, limit: number = 500): string {
    if (value.length > limit) {
      return `${value.slice(0, limit)} ...`;
    } else {
      return value.slice(0, limit);
    }
  }

}
