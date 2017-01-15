import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'movieTitle' })
export class MovieTitlePipe implements PipeTransform {
  transform(title: string): string {
    let result: string = title;
    
    if (result.length > 20) {
      result = result.slice(0, 16) + '...';
    }
    return result; 
  }
}