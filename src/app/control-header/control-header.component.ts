import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getStoreData } from '../../store/selector';
import { genreSettings, AppState, State, filmItem } from '../../types';
import { filterByName, filterByGenres, filterByYears } from '../../store/actions';

@Component({
  selector: 'app-control-header',
  templateUrl: './control-header.component.html',
  styleUrls: ['./control-header.component.sass']
})
export class ControlHeaderComponent {
  listOfGenres: Array<genreSettings>;
  listOfYears: Array<string>;
  currentGenre: string;
  currentYear: string;
  isGenreListVisible: boolean;
  isYearListVisible: boolean;

  constructor(private store: Store<AppState>) {

    this.store.pipe(select(getStoreData)).subscribe(
      (store: [Array<filmItem>, State]) => {
        this.listOfGenres = [{'genre': 'All', 'color': ''}]
        this.listOfGenres.push(...store[1].genreList);
        this.listOfYears = ['All'];
        this.currentGenre = store[1].currentGenre || 'All';
        this.currentYear = store[1].currentYear || 'All';

        for(let i: number = 0; i < store[1].yearList.length; i++) {
          this.listOfYears.push(store[1].yearList[i]);
        }
      }
    );
    
    this.isGenreListVisible = false;
    this.isYearListVisible = false;
  }

  findFilmsByName(name: string): void {
    this.store.dispatch(filterByName({name}));
  }

  findFilmsByGenre(genre: string): void {
    this.store.dispatch(filterByGenres({genre}));
  }

  findFilmsByYear(year: string) {
    this.store.dispatch(filterByYears({year}));
  }


  changeVisibleStateOfGenreList() {
    this.isGenreListVisible = !this.isGenreListVisible;
  }

  selectCurrentValueOfGenre(value: string) {
    this.currentGenre = value;
    this.findFilmsByGenre(value);
    this.changeVisibleStateOfGenreList();
  }


  changeVisibleStateOfYearList() {
    this.isYearListVisible = !this.isYearListVisible;
  }

  selectCurrentValueOfYear(value: string) {
    this.currentYear = value;
    this.findFilmsByYear(value.toString());
    this.changeVisibleStateOfYearList();
  }
}
