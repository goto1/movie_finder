import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'movieTitle' })
export class MovieTitlePipe implements PipeTransform {
  transform(title: string): string {
    let result: string = title;

    if (result.length > 34) {
      result = result.slice(0, 31) + '...';
    }
    return result; 
  }
}