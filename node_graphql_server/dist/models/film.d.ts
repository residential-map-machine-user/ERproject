import BaseModel from './base';
export default class Film extends BaseModel {
    getFilms(offset?: number, limit?: number): any;
    getFilm(id: string, filmID: number): Promise<any>;
}
