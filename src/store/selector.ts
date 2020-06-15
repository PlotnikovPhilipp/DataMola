import { createSelector } from '@ngrx/store';
import { AppState, State } from '../types';

const getAppStore: (state: AppState) => State = (state: AppState): State => state.state;
const getData: (state: State) => State = (state: State): State => state;
export const getStoreData = createSelector(getAppStore, getData);