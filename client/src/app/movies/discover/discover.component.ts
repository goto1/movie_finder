import { Component, OnInit } from '@angular/core';

interface Category {
  value: number;
  name: string;
};

interface Selected {
  category: Category;
}

@Component({
  templateUrl: './discover.component.html',
  styleUrls: [ './discover.component.sass' ]
})
export class DiscoverComponent implements OnInit {
  public selected: Selected;
  private categories: Category[] = [
    { value: 1, name: 'Now Playing' },
    { value: 2, name: 'Popular' },
    { value: 3, name: 'Top Rated' },
    { value: 4, name: 'Upcoming'}
  ];
  
  ngOnInit(): void {
    this.selected = {
      category: this.categories[0]
    };
  }

}