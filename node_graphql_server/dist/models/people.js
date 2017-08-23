"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class People extends base_1.default {
    getPeoples(offset, limit) {
        return this.connector.fetchPage('/people/', offset, limit);
    }
    getPeople(id, personID) {
        const url = id || `/people/${personID}/`;
        return this.connector.fetch(url);
    }
}
exports.default = People;
//# sourceMappingURL=people.js.map