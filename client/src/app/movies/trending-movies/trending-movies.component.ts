import { 
  Component, OnInit, 
  ElementRef, AfterViewInit } from '@angular/core';

interface Movie {
  img: string;
  title: string;
}

const imgUrl: string = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
const trendingMovies: Movie[] = [
  {img: imgUrl, title: 'Zootopia'},
  {img: imgUrl, title: 'Hell or High Water'},
  {img: imgUrl, title: 'Arrival'},
  {img: imgUrl, title: 'Moonlight'},
  {img: imgUrl, title: 'The Jungle Book'},
  {img: imgUrl, title: 'Love & Friendship'},
  {img: imgUrl, title: 'Finding Dory'},
  {img: imgUrl, title: 'Kubo and The Two Strings'},
  {img: imgUrl, title: 'Manchester by The Sea'},
  {img: imgUrl, title: 'Moana'}
];

@Component({
  selector: 'trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: [ './trending-movies.component.sass' ]
})
export class TrendingMoviesComponent implements AfterViewInit {
  public trendingMovies: Movie[] = trendingMovies;
  private trendingMoviesElement: any;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.trendingMoviesElement =
      this.elementRef.nativeElement.querySelector('.trending-movies');
  }

  public scrollTrendingMoviesLeft(): void {
    this.trendingMoviesElement.scrollLeft += -100;
  }

  public scrollTrendingMoviesRight(): void {
    this.trendingMoviesElement.scrollLeft += 100;
  }

}