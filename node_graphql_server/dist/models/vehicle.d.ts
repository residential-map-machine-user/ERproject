import BaseModel from './base';
export default class Vehicle extends BaseModel {
    getVehicles(offset?: number, limit?: number): any;
    getVehicle(id: string, vehicleID: number): Promise<any>;
}
