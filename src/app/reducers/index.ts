import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
    countNode,
    countReducer,
    CountSate,
} from './count/count.reducer';
import {
    colorNode,
    colorReducer,
    ColorState,
} from './color/color.reducer';

export interface State {
    [countNode]: CountSate,
    [colorNode]: ColorState
}

export const reducers: ActionReducerMap<State> = {
    [countNode]: countReducer,
    [colorNode]: colorReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
