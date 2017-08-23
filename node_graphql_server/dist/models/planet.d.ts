import BaseModel from './base';
export default class Planet extends BaseModel {
    getPlanets(offset?: number, limit?: number): any;
    getPlanet(id: string, planetID: number): Promise<any>;
}
