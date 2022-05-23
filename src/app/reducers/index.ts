import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
    countNode,
    countReducer,
    CountSate,
} from './count/count.reducer';

export interface State {
    [countNode]: CountSate
}

export const reducers: ActionReducerMap<State> = {
    [countNode]: countReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
