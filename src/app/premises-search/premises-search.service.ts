import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Premises {
    _id: number;
    number: number;
    type: string;
    sectionNumber: number;
    floorNumber?: number;
    houseNumber?: number;
    complexMod?: string;
    decorationType?: string;
    roomsAmount?: string;
    atBusinessComplex?: boolean;
    parkingNumber?: number;
    holdingCapacity?: number;
    withRepairPit?: boolean;
}

const data = [
    {
        _id: 11143,
        number: 2,
        type: 'flat',
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
        type: 'flat',
        floorNumber: 52,
        houseNumber: 2,
        sectionNumber: 1,
        complexMod: 'Lite',
        roomsAmount: 1,
        decorationType: 'Full',
    },
    {
        _id: 11143,
        number: 2,
        type: 'office',
        floorNumber: 60,
        houseNumber: 22,
        sectionNumber: 1,
        roomsAmount: 1,
        decorationType: 'Lite',
        atBusinessComplex: false,
    },
    {
        _id: 12343,
        number: 122,
        type: 'garage',
        parkingNumber: 121,
        sectionNumber: 2,
        holdingCapacity: 12,
        withRepairPit: false,
    },
    {
        _id: 17313,
        number: 12,
        type: 'garage',
        parkingNumber: 125,
        sectionNumber: 1,
        holdingCapacity: 11,
        withRepairPit: true,
    },
];

@Injectable({
    providedIn: 'root',
})

export class PremisesSearchService {

    constructor() {
    }

    public httpServer() {
        const premisesData = new BehaviorSubject(data);
        return premisesData;
    }
}
