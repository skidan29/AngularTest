import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

const data = {
  flats: [
    {
      _id: 11143,
      number: 2,
      floorNumber: 60,
      houseNumber: 2,
      sectionNumber: 1,
      complexMod: 'Lite',
      roomsAmount: 1,
      decorationType: 'Lite',
    },
    {
      _id: 12141,
      number: 4,
      floorNumber: 52,
      houseNumber: 2,
      sectionNumber: 1,
      complexMod: 'Lite',
      roomsAmount: 1,
      decorationType: 'Full',
    },
  ],
  offices: [
    {
      _id: 11143,
      number: 2,
      floorNumber: 60,
      houseNumber: 22,
      sectionNumber: 1,
      roomsAmount: 1,
      decorationType: 'Lite',
      atBusinessComplex: false,
    },
  ],
  garages:[
    {
      _id: 12343,
      number: 122,
      parkingNumber: 121,
      sectionNumber: 2,
      holdingCapacity: 12,
      withRepairPit: false,
    },
    {
      _id: 17313,
      number: 12,
      parkingNumber: 125,
      sectionNumber: 1,
      holdingCapacity: 11,
      withRepairPit: true,
    },
  ],
}

@Injectable({
  providedIn: 'root'
})

export class PremisesSearchService {

  constructor() { }

  public httpServer() {
    const sub = new BehaviorSubject(data);
    return sub;
  }
}
