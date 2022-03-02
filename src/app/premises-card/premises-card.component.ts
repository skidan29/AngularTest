/**
 * Вот в этом файле больше всего чистота кода нравится. Все просто и понятно.
 * Однако, если вспоминать книгу "Чистый Код" Роберта Мартина, методы должны сортироваться
 * как газетная статья. Сначала точка входа -- ngOnInit(), потом те функции, которая она вызывает
 * (методы группы init). А уже потом -- методы, которые не вызываются изнутри, а т.н. "слушатели",
 * например, onCalcPrice().
 */


import {
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PremisesCardService } from './premises-card.service';
import {
    Subject,
    takeUntil,
} from 'rxjs';


@Component({
    selector: 'app-premises-card',
    templateUrl: './premises-card.component.html',
    styleUrls: ['./premises-card.component.scss'],
})
export class PremisesCardComponent implements OnInit, OnDestroy {
    public premise: any;
    public price: number = 0;
    public activeRouterSubject = new Subject();

    constructor(
        private activeRoute: ActivatedRoute,
        private premisesCardService: PremisesCardService,
    ) {
    }

    ngOnInit(): void {
        this.initPremise();
    }

    public onCalcPrice() {
        this.price = this.premisesCardService.setPrice(this.premise);
    };

    private initPremise() {
        this.activeRoute.queryParams.pipe(takeUntil(this.activeRouterSubject)).subscribe(params => {
                this.premise = params;
            },
        );
    }

    public ngOnDestroy(): void {
        this.activeRouterSubject.next('');
        this.activeRouterSubject.complete();
    }
}
