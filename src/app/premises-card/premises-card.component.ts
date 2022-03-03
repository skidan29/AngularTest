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

    public ngOnInit(): void {
        this.initPremise();
    }

    public onCalcPrice(): void {
        this.price = this.premisesCardService.setPrice(this.premise);
    };

    private initPremise(): void {
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
