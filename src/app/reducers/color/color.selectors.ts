import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store';
import {
    countNode,
    CountSate,
} from '../count/count.reducer';
import {
    colorNode,
    ColorState,
} from './color.reducer';


export const selectColorFeature = createFeatureSelector<ColorState>(colorNode);

export const selectColor = createSelector(
    selectColorFeature, (state: ColorState): string => state.color
);