"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Vehicle extends base_1.default {
    getVehicles(offset, limit) {
        return this.connector.fetchPage('/vehicles/', offset, limit);
    }
    getVehicle(id, vehicleID) {
        const url = id || `/vehicles/${vehicleID}/`;
        return this.connector.fetch(url);
    }
}
exports.default = Vehicle;
//# sourceMappingURL=vehicle.js.map