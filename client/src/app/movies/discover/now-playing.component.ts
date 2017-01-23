import { Component, OnInit } from '@angular/core';

import { DiscoverService } from '../services/discover.service';

@Component({
  selector: 'now-playing',
  templateUrl: './display-movies-template.html',
  styleUrls: [ './display-movies-template.sass' ]
})
export class NowPlayingComponent implements OnInit {

  constructor(private discoverService: DiscoverService) { }
  
  ngOnInit(): void {
    this.discoverService.getNowPlayingMovies()
      .subscribe(
        movies => console.log(movies),
        err => console.log(err)
      );
  }
}