import {
    AfterViewInit,
    Component,
    ElementRef,
} from '@angular/core';
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
    CountSquareAction,
} from './reducers/count/count.actions';
import { selectColor } from './reducers/color/color.selectors';
import {
    ColorBlackAction,
    ColorRedAction,
} from './reducers/color/color.action';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

    public count$:Observable<number> = this.store$.pipe(select(selectCount));
    public updateAt$:Observable<number> = this.store$.pipe(select(selectUpdateAt));
    public color$:Observable<string> = this.store$.pipe(select(selectColor));
    public disableDecrease$:Observable<boolean> = this.count$.pipe(map(i=>i<=0))

    constructor(private store$: Store<CountSate>,
                private elRef: ElementRef) {}

    ngAfterViewInit(): void {



    }



    public increase() {
        this.store$.dispatch(new CountIncreaseAction());

    }

    public decrease() {
        this.store$.dispatch(new CountDecreaseAction());
    }

    public clear() {
        this.store$.dispatch(new CountClearAction());
    }

    public square() {
        this.store$.dispatch(new CountSquareAction());
    }

    public red() {
        this.store$.dispatch(new ColorRedAction());
    }

    public black() {
        this.store$.dispatch(new ColorBlackAction());
    }
}
