import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class PremisesCardService {

    public setPriceGarage(premise: any) {
        const sn = premise.sectionNumber;
        const pn = premise.parkingNumber;
        const k = premise.number;
        return k * (Math.sqrt(pn) / sn);
    }

    public setPriceFlat(premise: any) {
        let sum = 0;
        const k = premise.roomsAmount;
        const n = premise.number;
        const e = 2.7;
        for (let i = 0; i < n; i++) {
            sum += k * Math.pow(i, e);
        }
        return sum;
    }

    public setPriceOffice(premise: any) {
        const k = premise.number;
        const s = premise.sectionNumber;
        const n = premise.roomsAmount;
        const h = premise.houseNumber;
        const f = premise.floorNumber;
        return (k * n) / (f * Math.sqrt(h + s));
    }
}
