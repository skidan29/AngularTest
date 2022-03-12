export interface OfficesInterfaces {
  _id?: any;
  number: number;
  type: string;
  sectionNumber: number;
  floorNumber: number;
  houseNumber: number;
  decorationType?: string;
  roomsAmount: number;
  atBusinessComplex: boolean;
}

export interface FlatsInterfaces {
  _id?: any;
  number: number;
  type: string;
  sectionNumber: number;
  floorNumber?: number;
  houseNumber?: number;
  complexMod?: string;
  decorationType?: string;
  roomsAmount?: number;
}

export interface GaragesInterfaces {
  _id?: any;
  number: number;
  type: string;
  sectionNumber: number;
  parkingNumber?: number;
  holdingCapacity?: number;
  withRepairPit?: boolean;
}

export interface Premises {
  _id?: any;
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


