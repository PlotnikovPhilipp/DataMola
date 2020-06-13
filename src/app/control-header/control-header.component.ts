import { Component } from '@angular/core';
import genresData from '../../filmInfo/genres.json';
import yearsData from '../../filmInfo/years.json';
import defaultValues from '../../filmInfo/config.json';

const DEFAULT_GENRE: string = defaultValues.DEFAULT_GENRE;
const DEFAULT_YEAR: number = defaultValues.DEFAULT_YEAR;

interface genreSettings {
  genre: string;
  color: string;
}

@Component({
  selector: 'app-control-header',
  templateUrl: './control-header.component.html',
  styleUrls: ['./control-header.component.sass']
})
export class ControlHeaderComponent {
  listOfGenres: Array<genreSettings>;
  listOfYears: Array<number>;
  currentGenre: string;
  currentYear: number;
  isGenreListVisible: boolean;
  isYearListVisible: boolean;

  constructor() {
    this.listOfGenres = genresData;
    this.listOfYears = [];
    this.currentGenre = DEFAULT_GENRE;
    this.currentYear = DEFAULT_YEAR;
    this.isGenreListVisible = false;
    this.isYearListVisible = false;

    for(let i: number = yearsData.from; i <= yearsData.to; i++) {
      this.listOfYears.push(i);
    }
  }

  changeVisibleStateOfGenreList() {
    this.isGenreListVisible = !this.isGenreListVisible;
  }

  selectCurrentValueOfGenre(value: string) {
    this.currentGenre = value;
    this.changeVisibleStateOfGenreList();
  }

  changeVisibleStateOfYearList() {
    this.isYearListVisible = !this.isYearListVisible;
  }

  selectCurrentValueOfYear(value: number) {
    this.currentYear = value;
    this.changeVisibleStateOfYearList()
  }

}
