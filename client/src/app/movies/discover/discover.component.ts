import { Component, OnInit } from '@angular/core';

import { Category } from '../models/category'
import { Selected } from '../models/selected';

@Component({
  template: `
    <div class="select-category">
      <div class="select-wrapper">
        <select name="category" [(ngModel)]="selected.category">
          <option *ngFor="let category of categories" [ngValue]="category">
            {{category.name}}
          </option>
        </select>
      </div>
    </div>
    <now-playing *ngIf="selected.category.value === 1"></now-playing>
    <popular *ngIf="selected.category.value === 2"></popular>
    <top-rated *ngIf="selected.category.value === 3"></top-rated>
    <upcoming *ngIf="selected.category.value === 4"></upcoming>
  `,
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