import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'year' })
export class ExtractYearPipe implements PipeTransform {

  transform(date: string) {
    return new Date(date).getFullYear();
  }
}