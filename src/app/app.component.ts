import { Component } from '@angular/core';
import {
    select,
    Store,
} from '@ngrx/store';
import { CountSate } from './reducers/count/count.reducer';
import {
    map,
    Observable,
} from 'rxjs';
import {
    selectCount,
    selectUpdateAt,
} from './reducers/count/count.selectors';
import {
    CountClearAction,
    CountDecreaseAction,
    CountIncreaseAction,
} from './reducers/count/count.actions';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    public count$:Observable<number> = this.store$.pipe(select(selectCount));
    public updateAt$:Observable<number> = this.store$.pipe(select(selectUpdateAt));
    public disableDecrease$:Observable<boolean> = this.count$.pipe(map(i=>i<=0))
    constructor(private store$: Store<CountSate>) {}
    public increase() {
        this.store$.dispatch(new CountIncreaseAction());

    }

    public decrease() {
        this.store$.dispatch(new CountDecreaseAction());
    }

    public clear() {
        this.store$.dispatch(new CountClearAction());
    }
}
