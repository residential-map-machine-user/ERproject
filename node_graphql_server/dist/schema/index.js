"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const film_1 = require("./film");
const people_1 = require("./people");
const planet_1 = require("./planet");
const root_1 = require("./root");
const species_1 = require("./species");
const starship_1 = require("./starship");
const vehicle_1 = require("./vehicle");
const schema = `
  schema {
    query: RootQuery
  }
`;
exports.default = [
    film_1.default,
    people_1.default,
    planet_1.default,
    root_1.default,
    species_1.default,
    starship_1.default,
    vehicle_1.default,
    schema,
];
//# sourceMappingURL=index.js.map