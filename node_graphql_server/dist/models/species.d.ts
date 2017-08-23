import BaseModel from './base';
export default class Species extends BaseModel {
    getAllSpecies(offset?: number, limit?: number): any;
    getSpecies(id: string, speciesID: number): Promise<any>;
}
