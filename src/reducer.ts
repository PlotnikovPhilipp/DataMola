import { createReducer, on, ActionReducer } from '@ngrx/store';
import * as actions from './actions';
import { State } from './types';

const initialState: State = {
    'DEFAULT_GENRE': null,
    'DEFAULT_YEAR': null,
    'genreList': null,
    'yearList': null,
    'AMOUNT_OF_FILM_ON_ONE_PAGE': null,
    'currentPageIndex': null,
    'films': null
};

const _mainReducer: ActionReducer<State> = createReducer(
    initialState,
    on(actions.initStore, (state, props): State => {
        return({
            'DEFAULT_GENRE': props.DEFAULT_GENRE,
            'DEFAULT_YEAR': props.DEFAULT_YEAR,
            'AMOUNT_OF_FILM_ON_ONE_PAGE': props.AMOUNT_OF_FILM_ON_ONE_PAGE,
            'currentPageIndex': props.currentPageIndex,
            'genreList': props.genreList,
            'yearList': props.yearList,
            'films': props.films
        });
    }),

    on(actions.reinitStore, (state, props): State => {
        return({
            ...state,
            'films': props.films
        })
    }),

    // Filters
    on(actions.nameFilterByEffect, (state, props: State): State => {
        return({
            ...state,
            'films': props.films
        });
    }),

    on(actions.genreFilterByEffect, (state, props: State): State => {
        return({
            ...state,
            'films': props.films
        });
    }),

    on(actions.yearFilterByEffect, (state, props: State): State => {
        return({
            ...state,
            'films': props.films
        });
    }),

    // Sorts
    on(actions.nameSortByEffect, (state, props: State): State => {
        return({
            ...state,
            'films': props.films
        })
    }),

    on(actions.seasonSortByEffect, (state, props: State): State => {
        return({
            ...state,
            'films': props.films
        })
    }),

    on(actions.networkSortByEffect, (state, props: State): State => {
        return({
            ...state,
            'films': props.films
        })
    }),

    on(actions.premiereSortByEffect, (state, props: State): State => {
        return({
            ...state,
            'films': props.films
        })
    }),

    // Pages
    on(actions.changePage, (state, props: State): State => {
        return({
            'DEFAULT_GENRE': props.DEFAULT_GENRE,
            'DEFAULT_YEAR': props.DEFAULT_YEAR,
            'AMOUNT_OF_FILM_ON_ONE_PAGE': props.AMOUNT_OF_FILM_ON_ONE_PAGE,
            'currentPageIndex': props.currentPageIndex,
            'genreList': props.genreList,
            'yearList': props.yearList,
            'films': props.films
        })
    }),

    on(actions.changeAmountFilmOnOnePage, (state, props: State): State => {
        return({
            'DEFAULT_GENRE': props.DEFAULT_GENRE,
            'DEFAULT_YEAR': props.DEFAULT_YEAR,
            'AMOUNT_OF_FILM_ON_ONE_PAGE': props.AMOUNT_OF_FILM_ON_ONE_PAGE,
            'currentPageIndex': props.currentPageIndex,
            'genreList': props.genreList,
            'yearList': props.yearList,
            'films': props.films
        })
    })
);

export function mainReducer(state: State, action) {
    return _mainReducer(state, action);
}