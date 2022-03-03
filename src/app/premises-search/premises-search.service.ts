import { Injectable } from '@angular/core';
import {
    BehaviorSubject,
    Observable,
} from 'rxjs';


export interface Premises {
    _id: number;
    number: number;
    type: string;
    sectionNumber: number;
    floorNumber?: number;
    houseNumber?: number;
    complexMod?: string;
    decorationType?: string;
    roomsAmount?: number;
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

    public httpServer(): Observable<Premises[]> {
        return new BehaviorSubject(data);
    }

    public setRandomNumber(max: number): number {
        return Math.floor(Math.random() * max);
    }

    public setRandomBoolean(id: number): boolean {
        if (id % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    public setRandomMod(number: number): string {
        switch (number) {
            case 0:
                return 'YAR';
            case 1:
                return 'NT';
            case 2:
                return 'OB2';
            default:
                return 'RED3';
        }
    }

    public setRandomString(length: number): string {
        let str = '';
        while (str.length < length)
            str += Math.random().toString(36).substring(2);
        return str.substring(0, length);
    }

    public createGarage(): Premises {
        return {
            _id: this.setRandomNumber(1000000),
            number: this.setRandomNumber(100),
            type: 'garage',
            parkingNumber: this.setRandomNumber(400),
            sectionNumber: this.setRandomNumber(10),
            holdingCapacity: this.setRandomNumber(30),
            withRepairPit: this.setRandomBoolean(this.setRandomNumber(100)),
        };
    }

    public createOffice(): Premises {
        return {
            _id: this.setRandomNumber(1000000),
            number: this.setRandomNumber(100),
            type: 'office',
            floorNumber: this.setRandomNumber(400),
            houseNumber: this.setRandomNumber(30),
            sectionNumber: this.setRandomNumber(10),
            roomsAmount: this.setRandomNumber(10),
            decorationType: this.setRandomString(this.setRandomNumber(10)),
            atBusinessComplex: this.setRandomBoolean(this.setRandomNumber(100)),
        };
    }

    public createFlat(): Premises {
        return {
            _id: this.setRandomNumber(1000000),
            number: this.setRandomNumber(100),
            type: 'flat',
            floorNumber: this.setRandomNumber(400),
            houseNumber: this.setRandomNumber(30),
            sectionNumber: this.setRandomNumber(10),
            complexMod: this.setRandomMod(this.setRandomNumber(4)),
            roomsAmount: this.setRandomNumber(10),
            decorationType: this.setRandomString(this.setRandomNumber(10)),
        };
    }

    public createObject(number: number): Premises {
        switch (number) {
            case 0:
                return this.createFlat();
            case 1:
                return this.createOffice();
            case 2:
                return this.createGarage();
            default:
                return this.createFlat();
        }
    }
}
