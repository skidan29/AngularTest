import { Injectable } from '@angular/core';
import { FlatsInterfaces, GaragesInterfaces, OfficesInterfaces, Premises } from './premises.interfaces';


@Injectable({
    providedIn: 'root',
})
export class PremisesSearchService {
    constructor() {
    }

    public setRandomNumber(max: number): number {
        return Math.floor(Math.random() * max);
    }

    public setRandomBoolean(number: number): boolean {
        if (number % 2 === 0) {
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
        while (str.length < length) str += Math.random().toString(36).substring(2);
        return str.substring(0, length);
    }

    public createGarage(): GaragesInterfaces {
        return {
            number: this.setRandomNumber(100),
            type: 'garage',
            parkingNumber: this.setRandomNumber(400),
            sectionNumber: this.setRandomNumber(10),
            holdingCapacity: this.setRandomNumber(30),
            withRepairPit: this.setRandomBoolean(this.setRandomNumber(100)),
        };
    }

    public createOffice(): OfficesInterfaces {
        return {
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

    public createFlat(): FlatsInterfaces {
        return {
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

    public createObject(number: number): GaragesInterfaces | OfficesInterfaces | FlatsInterfaces {
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
