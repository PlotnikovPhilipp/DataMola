import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../types';
import { sortByName, sortBySeason, sortByNetwork, sortByPremiere } from '../../store/actions'

@Component({
  selector: 'app-window-header',
  templateUrl: './window-header.component.html',
  styleUrls: ['./window-header.component.sass']
})
export class WindowHeaderComponent {

  constructor(private store: Store<AppState>) { }

  sortByName(): void {
    this.store.dispatch(sortByName());
  }

  sortBySeason(): void {
    this.store.dispatch(sortBySeason());
  }

  sortByNetwork(): void {
    this.store.dispatch(sortByNetwork());
  }

  sortByPremiere(): void {
    this.store.dispatch(sortByPremiere());
  }
}
