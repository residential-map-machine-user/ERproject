import BaseModel from './base';
export default class Starship extends BaseModel {
    getStarships(offset?: number, limit?: number): any;
    getStarship(id: string, starshipID: number): Promise<any>;
}
