import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {colors} from "@angular/cli/utilities/color";
import {PremisesSearchService} from "./premises-search.service";

@Component({
  selector: 'app-premises-search',
  templateUrl: './premises-search.component.html',
  styleUrls: ['./premises-search.component.scss'],
  providers:[PremisesSearchService]
})
export class PremisesSearchComponent implements OnInit {


  constructor(private premisesSearchService: PremisesSearchService) { }

  ngOnInit(): void {

    this.premisesSearchService.httpServer().subscribe(data => console.log(data))

  }

}
