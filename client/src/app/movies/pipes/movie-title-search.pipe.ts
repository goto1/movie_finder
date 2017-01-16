import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'movieTitleSearch' })
export class MovieTitleSearchPipe implements PipeTransform {
  transform(title: string): string {
    if (title.length > 19) {
      title = title.slice(0, 16) + '...';
    }
    return title;
  }
}