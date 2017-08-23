import BaseModel from './base';
export default class People extends BaseModel {
    getPeoples(offset?: number, limit?: number): any;
    getPeople(id: string, personID: number): Promise<any>;
}
