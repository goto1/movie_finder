import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'movieTitleTrending' })
export class MovieTitleTrendingPipe implements PipeTransform {
  transform(title: string): string {
    if (title.length > 34) {
      title = title.slice(0, 31) + '...';
    }
    return title;
  }
}