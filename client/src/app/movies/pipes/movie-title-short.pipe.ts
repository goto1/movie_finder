import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'movieTitleShort' })
export class MovieTitleShortPipe implements PipeTransform {
  transform(title: string, titleLength: number): string {
    if (title.length > +titleLength) {
      title = title.slice(0, +titleLength - 3) + '...';
    }
    return title;
  }
}