import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store';
import {
    countNode,
    CountSate,
} from './count.reducer';

export const selectCountFeature = createFeatureSelector<CountSate>(countNode);

export const selectCount = createSelector(
    selectCountFeature, (state:CountSate): number => state.count
);

export const selectUpdateAt = createSelector(
    selectCountFeature, (state:CountSate): number => state.updateAt
);