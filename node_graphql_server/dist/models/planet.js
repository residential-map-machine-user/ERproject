"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Planet extends base_1.default {
    getPlanets(offset, limit) {
        return this.connector.fetchPage('/planets/', offset, limit);
    }
    getPlanet(id, planetID) {
        const url = id || `/planets/${planetID}/`;
        return this.connector.fetch(url);
    }
}
exports.default = Planet;
//# sourceMappingURL=planet.js.map