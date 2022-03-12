import {
    Component,
    OnInit,
} from '@angular/core';
import { PremisesSearchService } from './premises-search.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FilterConfig, Premise} from './premises.interfaces';

@Component({
    selector: 'app-premises-search',
    templateUrl: './premises-search.component.html',
    styleUrls: ['./premises-search.component.scss'],
    providers: [PremisesSearchService],
})
export class PremisesSearchComponent implements OnInit {
    public premisesData: any;
    public premises: any;

    private defaultConfigFilter = {
        garage: true,
        office: true,
        flat: true,
    };

    constructor(
        private premisesSearchService: PremisesSearchService,
        private router: Router,
        private http: HttpClient,
    ) {
    }

    ngOnInit(): void {
        this.initPremisesData();

    }

    public initPremisesData(): void {
        this.premises = [];
        this.http.get('http://localhost:3000/api/premises')
        .subscribe((data) => {
            this.premisesData = data;
            this.initPremises(this.defaultConfigFilter);
        });
       ;
    }

    private initPremises(type: FilterConfig):void{
    const premises=[]
    if (type.garage) {
      premises.push(...this.filterPremises('garage'));
    }
    if (type.office) {
      premises.push(...this.filterPremises('office'));
    }
    if (type.flat) {
     premises.push(...this.filterPremises('flat'));
    }
    this.premises = premises
  }

    private filterPremises(type: string): Premise[] {
        return this.premisesData.filter((i: Premise) => i.type === type);
    }

   public createObject():void {
        const newObject = this.premisesSearchService.createObject(
            this.premisesSearchService.setRandomNumber(3),
        );
        this.premises.push(newObject);
        this.http
            .post('http://localhost:3000/api/premises', newObject)
            .subscribe((data) => console.log(data));
    }

    public onChangeForm(config: FilterConfig):void {
        const formValidation = Object.values(config).find(
         (value) => value === true
        );
        if (formValidation) {
         this.initPremises(config);
        } else {
        this.initPremises(this.defaultConfigFilter);
        }
    }

    public onLinkCard(id:string):void {
        this.router.navigate([`card/${id}`]);
    }
}
