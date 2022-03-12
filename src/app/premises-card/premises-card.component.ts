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
import { HttpClient } from '@angular/common/http';
import { FlatsInterfaces, GaragesInterfaces, OfficesInterfaces, Premises } from '../premises-search/premises.interfaces';

@Component({
    selector: 'app-premises-card',
    templateUrl: './premises-card.component.html',
    styleUrls: ['./premises-card.component.scss'],
})

export class PremisesCardComponent implements OnInit, OnDestroy {
    public premise:any;
    public price: number = 0;
    public activeRouterSubject = new Subject();
    public premisesData:any;

    constructor(
        private activeRoute: ActivatedRoute,
        private premisesCardService: PremisesCardService,
        private http: HttpClient
    ) {
    }

    public ngOnInit(): void {
      this.initPremisesData();
    }

    public onCalcPrice(): void {
        this.price = this.premisesCardService.setPrice(this.premise);
    };

    initPremisesData() {
      this.http.get('http://localhost:3000/api/premises')
      .subscribe((data) => {
          this.premisesData = data;
          this.initPremise();
      });
    }

    private initPremise(): void {
        this.activeRoute.params.pipe(takeUntil(this.activeRouterSubject)).subscribe(params => {
          this.premise = this.premisesData.filter((p: Premises) => p._id === params['id'])[0]
          console.log(this.premise);
        });
    }

    public ngOnDestroy(): void {
        this.activeRouterSubject.next('');
        this.activeRouterSubject.complete();
    }
}
