import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState, State } from '../../types';
import { getStoreData } from '../../store/selector';
import { changePage, changeAmountFilmOnOnePage } from '../../store/actions';

@Component({
  selector: 'app-control-footer',
  templateUrl: './control-footer.component.html',
  styleUrls: ['./control-footer.component.sass']
})
export class ControlFooterComponent {

  firstOption: number;
  secondOption: number;
  thirdOption: number;
  currentPage: number;
  listOfPages: Array<number>;
  currentStore: State;
  selectedOptionOfAmountFilmOnOnePage: number;

  constructor(private store: Store<AppState>) {
    this.currentPage = 0;
    this.selectedOptionOfAmountFilmOnOnePage = 0;
    this.store.pipe(select(getStoreData)).subscribe(
      (store: State) => {
        this.currentStore = store;
        let to: number = Math.ceil(store.films.length / store.AMOUNT_OF_FILM_ON_ONE_PAGE);
        this.listOfPages = [];
        for(let i: number = 1; i <= to; i++) {
          this.listOfPages.push(i);
        }
      }
    );
    this.firstOption = 5;
    this.secondOption = 10;
    this.thirdOption = 25;
  }

  emitStoreActionForChangePage(): void {
    this.store.dispatch(changePage({...this.currentStore, currentPageIndex: this.currentPage}));
  }

  emitStoreActionForChangeAmountFilmOnOnePage(value: number): void {
    this.store.dispatch(changeAmountFilmOnOnePage({...this.currentStore, AMOUNT_OF_FILM_ON_ONE_PAGE: value}));
  }

  previousPage(): void {
    if(this.currentPage === 0) return;
    this.currentPage--;
    this.emitStoreActionForChangePage();
  }

  selectPage(pageIndex: number): void {
    this.currentPage = pageIndex;
    this.emitStoreActionForChangePage();
  }

  nextPage(): void {
    if(this.currentPage + 1 === this.listOfPages.length) return;
    this.currentPage++;
    this.emitStoreActionForChangePage();
  }

  changeAmountFilmOnOnePage(value: number): void {
    switch(value) {
      case this.firstOption:
        this.selectedOptionOfAmountFilmOnOnePage = 0;
        break;
      case this.secondOption:
        this.selectedOptionOfAmountFilmOnOnePage = 1;
        break;
      default:
        this.selectedOptionOfAmountFilmOnOnePage = 2;
    }
    
    this.emitStoreActionForChangeAmountFilmOnOnePage(value);
  }
}
