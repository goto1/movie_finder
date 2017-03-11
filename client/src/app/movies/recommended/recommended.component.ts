import { Component, OnInit } from '@angular/core';
import { RecommendedService } from '../services/recommended.service';

@Component({
  template: `
    <h1>Hi</h1>
  `,
  styleUrls: [ './recommended.component.sass' ]
})
export class RecommendedComponent implements OnInit {
  
  constructor (private rc: RecommendedService) { }
  
  ngOnInit(): void {
    this.rc.getRecommendedMovies()
      .subscribe(
        data => data,
        err => err
      );
  }
}