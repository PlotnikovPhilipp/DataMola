import { Component } from '@angular/core';
import {  Store, select } from '@ngrx/store';
import { getStoreData } from '../../store/selector';
import { filmItem, AppState, State } from '../../types';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.sass']
})
export class WindowComponent {
  displayedFilms: Array<filmItem>;


  constructor(private store: Store<AppState>) {

    this.store.pipe(select(getStoreData)).subscribe((storeData: [Array<filmItem>, State]) => {
        let [displayedFilms] = storeData;
        this.displayedFilms = displayedFilms;
    });
  }



}
