"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gqlTools = require('graphql-tools');
const index_1 = require("./schema/index");
const index_2 = require("./resolvers/index");
const swapi_1 = require("./connectors/swapi");
const film_1 = require("./models/film");
const people_1 = require("./models/people");
const vehicle_1 = require("./models/vehicle");
const planet_1 = require("./models/planet");
const starship_1 = require("./models/starship");
const species_1 = require("./models/species");
const express_1 = require("./express");
const hapi_1 = require("./hapi");
const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : 'http://swapi.co/api';
const schema = gqlTools.makeExecutableSchema({ typeDefs: index_1.default, resolvers: index_2.default });
function graphqlOptions() {
    const swapiConnector = new swapi_1.default(apiHost);
    return {
        pretty: true,
        schema,
        context: {
            film: new film_1.default(swapiConnector),
            vehicle: new vehicle_1.default(swapiConnector),
            people: new people_1.default(swapiConnector),
            planet: new planet_1.default(swapiConnector),
            starship: new starship_1.default(swapiConnector),
            species: new species_1.default(swapiConnector),
        },
    };
}
express_1.startExpress(graphqlOptions);
hapi_1.startHapi(graphqlOptions);
//# sourceMappingURL=index.js.map