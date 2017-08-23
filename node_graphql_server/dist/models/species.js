"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Species extends base_1.default {
    getAllSpecies(offset, limit) {
        return this.connector.fetchPage('/species/', offset, limit);
    }
    getSpecies(id, speciesID) {
        const url = id || `/species/${speciesID}/`;
        return this.connector.fetch(url);
    }
}
exports.default = Species;
//# sourceMappingURL=species.js.map