import {
    Component,
    OnInit,
} from '@angular/core';
import { PremisesSearchService } from './premises-search.service';
import {
    FormControl,
    FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Premises } from './premises.interfaces';

interface FilterConfig {
    garage: boolean;
    office: boolean;
    flat: boolean;
}

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
        this.initPremises();

    }

    initPremises() {
        this.premises = [];
        this.http.get('http://localhost:3000/api/premises')
        .subscribe((data) => {
            this.premisesData = data;
            this.initFilterPremises(this.defaultConfigFilter);
        });
       ;
    }

    initFilterPremises(type: FilterConfig){
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

    private filterPremises(type: string) {
        return this.premisesData.filter((i: Premises) => i.type === type);
    }

    createObject() {
        const newObject = this.premisesSearchService.createObject(
            this.premisesSearchService.setRandomNumber(3),
        );
        this.premises.push(newObject);

        this.http
            .post('http://localhost:3000/api/premises', newObject)
            .subscribe((data) => console.log(data));
    }

    public profileForm = new FormGroup({
        flat: new FormControl(false),
        office: new FormControl(false),
        garage: new FormControl(false),
    });

    onChangeForm() {
        const formValidation = Object.values(this.profileForm.value).find(
         (value) => value === true
        );
        if (formValidation) {
         this.initFilterPremises(this.profileForm.value);
        } else {
        this.initFilterPremises(this.defaultConfigFilter);
        }
    }

    public onTheRouteCard(id:string) {
        this.router.navigate([`card/${id}`]);
    }
}
