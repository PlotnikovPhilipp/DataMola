import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, OnInitEffects, EffectNotification } from '@ngrx/effects';
import { Store, Action, select } from '@ngrx/store';
import * as actions from './actions';
import { getStoreData } from './selector';
import { Observable } from 'rxjs';
import { exhaustMap, tap, map } from 'rxjs/operators';

import { AppState, State, filmItem } from './types';
import defaultValues from './filmInfo/config.json';
import filmInfo from './filmInfo/films.json';
import genreList from './filmInfo/genres.json';
import yearList from './filmInfo/years.json';

const initialState: State = {
    'DEFAULT_GENRE': defaultValues.DEFAULT_GENRE,
    'DEFAULT_YEAR': defaultValues.DEFAULT_YEAR,
    'AMOUNT_OF_FILM_ON_ONE_PAGE': defaultValues.AMOUNT_OF_FILM_ON_ONE_PAGE,
    'currentPageIndex': defaultValues.firstPage - 1,
    'genreList': genreList,
    'yearList': yearList,
    'films': filmInfo
};

@Injectable()
export class MovieEffects implements OnInitEffects {
    searchingName: RegExp;
    searchingGenre: RegExp;
    searchingYear: RegExp;
    newListOfFilms:  Array<filmItem>;

    constructor(private actions$: Actions, private store: Store<AppState>) {
        this.searchingName = new RegExp('.*');
        this.newListOfFilms = initialState.films;
        this.searchingGenre = (defaultValues.DEFAULT_GENRE === 'All')? new RegExp('.*') : new RegExp(`^${defaultValues.DEFAULT_GENRE}$`);
        this.searchingYear = (defaultValues.DEFAULT_YEAR === 'All')? new RegExp('.*') : new RegExp(`^${defaultValues.DEFAULT_YEAR}$`);
    }

    ngrxOnInitEffects(): Action {
        return actions.initStore(initialState);
    }

    createNewReference(): Array<filmItem> {
        let middleListOfFilms: Array<filmItem> = [];
        for(let i: number = 0; i < this.newListOfFilms.length; i++) {
            middleListOfFilms.push(this.newListOfFilms[i]);
        }
        return middleListOfFilms;
    }

    /* 
    
        Filters

    */

    // Name filter
    loadMoviesByName$ = createEffect(() => (
        this.actions$.pipe(
            ofType('[Filters] Name'),
            map(( action: {type: string; name: string} ) => {
                switch(action.name) {
                    case '':
                        this.searchingName = new RegExp('.*');
                        return actions.reinitStore(initialState);
                    default:
                        let name: string = action.name;
                        this.newListOfFilms = [];
                        this.searchingName = new RegExp(`${name}`, 'i');
                        for(let i: number = 0; i < filmInfo.length; i++) {
                            let genreList: Array<string> = filmInfo[i].info.genre.split('|');
                            for(let j: number = 0; j < genreList.length; j++) {
                                if(this.searchingName.test(filmInfo[i].filmName) && this.searchingGenre.test(genreList[j]) && this.searchingYear.test(filmInfo[i].info.date.split('.')[2])) {
                                    this.newListOfFilms.push(filmInfo[i]);
                                }
                            }
                        }   
                        return actions.nameFilterByEffect({...initialState, 'films': this.newListOfFilms});
                }
            })
        )
    ));

    // Genre filter
    loadMoviesByGenre$ = createEffect(() => (
        this.actions$.pipe(
            ofType('[Filters] Genre'),
            map((action: {type: string; genre: string}) => {
                this.searchingGenre = (action.genre === 'All')? new RegExp('.*') : new RegExp(`^${action.genre}$`);
                this.newListOfFilms = [];
                for(let i: number = 0; i < filmInfo.length; i++) {
                    let genreList: Array<string> = filmInfo[i].info.genre.split('|');
                    for(let j: number = 0; j < genreList.length; j++) {
                        if(this.searchingName.test(filmInfo[i].filmName) && this.searchingGenre.test(genreList[j]) && this.searchingYear.test(filmInfo[i].info.date.split('.')[2])) {
                            this.newListOfFilms.push(filmInfo[i]);
                            break;
                        }
                    }
                }
                return actions.genreFilterByEffect({...initialState, films: this.newListOfFilms});
            })
        )
    ));

    // Year filter
    loadMoviesByYears$ = createEffect(() => (
        this.actions$.pipe(
            ofType('[Filters] Year'),
            map((action: {type: string; year: string}) => {
                this.searchingYear = (action.year === 'All')? new RegExp('.*') : new RegExp(`^${action.year}$`);
                this.newListOfFilms = [];
                for(let i: number = 0; i < filmInfo.length; i++) {
                    let genreList: Array<string> = filmInfo[i].info.genre.split('|');
                    for(let j: number = 0; j < genreList.length; j++) {
                        if(this.searchingName.test(filmInfo[i].filmName) && this.searchingGenre.test(genreList[j]) && this.searchingYear.test(filmInfo[i].info.date.split('.')[2])) {
                            this.newListOfFilms.push(filmInfo[i]);
                            break;
                        }
                    }
                }
                return actions.yearFilterByEffect({...initialState, films: this.newListOfFilms})
            })
        )
    ));

    /* 
            
            Sorts
    
    */

    // Sort by name
    sortMoviesByName$ = createEffect(() => (
        this.actions$.pipe(
            ofType('[Sorts] Name'),
            map((action) => {
                // Simple create new reference to Angular notice the changing
                let middleListOfFilms: Array<filmItem> = this.createNewReference();
                middleListOfFilms.sort((firstElement: filmItem, secondElement: filmItem): number => {
                    return (firstElement.filmName > secondElement.filmName)? 1 : -1;
                });

                this.newListOfFilms = middleListOfFilms;
                return actions.nameSortByEffect({...initialState, films: this.newListOfFilms});
            })
        )
    ));

    // Sort by season
    sortMoviesBySeason$ = createEffect(() => (
        this.actions$.pipe(
            ofType('[Sorts] Season'),
            map((action) => {
                // Simple create new reference to Angular notice the changing
                let middleListOfFilms: Array<filmItem> = this.createNewReference();
                middleListOfFilms.sort((firstElement: filmItem, secondElement: filmItem): number => {
                    return Number(firstElement.info.season) - Number(secondElement.info.season);
                });

                this.newListOfFilms = middleListOfFilms;
                return actions.seasonSortByEffect({...initialState, films: this.newListOfFilms});
            })
        )
    ));

    // Sort by Network
    sortMoviesByNetwork$ = createEffect(() => (
        this.actions$.pipe(
            ofType('[Sorts] Network'),
            map((action) => {
                // Simple create new reference to Angular notice the changing
                let middleListOfFilms: Array<filmItem> = this.createNewReference();
                middleListOfFilms.sort((firstElement: filmItem, secondElement: filmItem): number => {
                    return (firstElement.info.network > secondElement.info.network)? 1 : -1;
                });

                this.newListOfFilms = middleListOfFilms;
                return actions.networkSortByEffect({...initialState, films: this.newListOfFilms});
            })
        )
    ));

    // Sort by Premiere
    sortMoviesByPremiere$ = createEffect(() => (
        this.actions$.pipe(
            ofType('[Sorts] Premiere'),
            map((action) => {
                // Simple create new reference to Angular notice the changing
                let middleListOfFilms: Array<filmItem> = this.createNewReference();
                middleListOfFilms.sort((firstElement: filmItem, secondElement: filmItem): number => {
                    let firstDateInfo: Array<string> = firstElement.info.date.split('.');
                    let secondDateInfo: Array<string> = secondElement.info.date.split('.');
                    return Number(new Date(+firstDateInfo[2], +firstDateInfo[1] - 1, +firstDateInfo[0])) - Number(new Date(+secondDateInfo[2], +secondDateInfo[1] - 1, +secondDateInfo[0]));
                });

                this.newListOfFilms = middleListOfFilms;
                return actions.premiereSortByEffect({...initialState, films: this.newListOfFilms});
            })
        )
    ));

}