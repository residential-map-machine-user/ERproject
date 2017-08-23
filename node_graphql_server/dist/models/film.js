"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Film extends base_1.default {
    getFilms(offset, limit) {
        return this.connector.fetchPage('/films/', offset, limit);
    }
    getFilm(id, filmID) {
        const url = id || `/films/${filmID}/`;
        return this.connector.fetch(url);
    }
}
exports.default = Film;
//# sourceMappingURL=film.js.map