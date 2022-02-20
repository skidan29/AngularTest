import {Component, OnInit} from '@angular/core';
import {PremisesSearchService} from "./premises-search.service";
import {Premises} from "./premises-search.service";
import {FormControl, FormGroup} from "@angular/forms";

interface FilterConfig {
  garage: boolean;
  office: boolean;
  flat: boolean;
}

@Component({
  selector: 'app-premises-search',
  templateUrl: './premises-search.component.html',
  styleUrls: ['./premises-search.component.scss'],
  providers:[PremisesSearchService]
})

export class PremisesSearchComponent implements OnInit  {

  public premisesData: any;
  public premises:any;

  private configFilter = {
    garage: true,
    office: true,
    flat: true,
  }
  constructor(private premisesSearchService: PremisesSearchService) { }

  ngOnInit(): void {

    this.premisesSearchService.httpServer().subscribe(data => {
      this.premisesData =  data;
      this.premises = this.initPremises(this.configFilter);
      console.log('on int')


    })
  }
  public profileForm = new FormGroup({
    flat: new FormControl(false),
    office: new FormControl(false),
    garage: new FormControl(false),

  });

  onSubmit() {
    this.premises = this.initPremises(this.profileForm.value)
  }

  initPremises(type: FilterConfig){
    const premises = [];
   if (type.garage){ premises.push(...this.filterPremises('garage'))}
   if (type.office){ premises.push(...this.filterPremises('office'))}
   if (type.flat){ premises.push(...this.filterPremises('flat'))}
     return premises;
  }

  private filterPremises(type: string){
    return  this.premisesData.filter((i:Premises) => i.type === type);
  }

}
