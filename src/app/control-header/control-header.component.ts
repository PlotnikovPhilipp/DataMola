import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getStoreData } from '../../selector';
import { genreSettings, AppState, State } from '../../types';
import { filterByName, filterByGenres, filterByYears } from '../../actions';

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
      (store: State) => {
        this.listOfGenres = [{'genre': 'All', 'color': ''}]
        this.listOfGenres.push(...store.genreList);
        this.listOfYears = ['All'];
        this.currentGenre = (this.currentGenre)? this.currentGenre : store.DEFAULT_GENRE;
        this.currentYear = (this.currentYear)? this.currentYear : store.DEFAULT_YEAR;

        for(let i: number = store.yearList.from; i <= store.yearList.to; i++) {
          this.listOfYears.push(i.toString());
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
