import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, OnInitEffects } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { initStore } from './actions';
import defaultValues from './filmInfo/config.json';
import filmInfo from './filmInfo/films.json';

interface filmItem {
    'filmName': string;
    'info': {
        'genre': string;
        'season': string;
        'network': string;
        'data': string;
    }
}

interface State {
    'DEFAULT_GENRE': string;
    'DEFAULT_YEAR': number;
    'AMOUNT_OF_FILM_ON_ONE_PAGE': number;
    'films': Array<filmItem>
}

const initialState: State = {
    'DEFAULT_GENRE': defaultValues.DEFAULT_GENRE,
    'DEFAULT_YEAR': defaultValues.DEFAULT_YEAR,
    'AMOUNT_OF_FILM_ON_ONE_PAGE': defaultValues.AMOUNT_OF_FILM_ON_ONE_PAGE,
    'films': filmInfo
};

@Injectable()
export class MovieEffects implements OnInitEffects {
    constructor(private action$: Actions, private store: Store<State>) {}

    ngrxOnInitEffects(): Action {
        this.store.dispatch(initStore(initialState));
        return {type: '[Initiating] InitEffectModule'}
    }

    getMovies$ = createEffect(() => this.action$.pipe());
}