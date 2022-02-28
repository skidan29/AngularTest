import {
    Component,
    OnInit,
} from '@angular/core';
import { PremisesSearchService } from './premises-search.service';
import { Premises } from './premises-search.service';
import {
    FormControl,
    FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { query } from '@angular/animations';


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
    ) {
    }

    ngOnInit(): void {
        this.premisesSearchService.httpServer().subscribe(data => {
            this.premisesData = data;
            this.initPremises(this.defaultConfigFilter);
            console.log(
              this.premisesSearchService.createFlat(),

            )
        });
    }

    createObject() {
        this.premises.push(this.premisesSearchService.createObject(this.premisesSearchService.setRandomNumber(2)));
    }

    public profileForm = new FormGroup({
        flat: new FormControl(false),
        office: new FormControl(false),
        garage: new FormControl(false),

    });

    onChangeForm() {
        const formValidation = Object.values(this.profileForm.value).find(value => value === true);
        if (formValidation) {
            this.initPremises(this.profileForm.value);
        } else {
            this.initPremises(this.defaultConfigFilter);
        }
    }

    initPremises(type: FilterConfig) {
        const premises = [];
        if (type.garage) {
            premises.push(...this.filterPremises('garage'));
        }
        if (type.office) {
            premises.push(...this.filterPremises('office'));
        }
        if (type.flat) {
            premises.push(...this.filterPremises('flat'));
        }

        this.premises = premises;
    }

    private filterPremises(type: string) {
        return this.premisesData.filter((i: Premises) => i.type === type);
    }

    public onTheRouteCard(premise: Premises) {
        this.router.navigate(['card'], { queryParams: premise });
    }

}
