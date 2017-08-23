"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hapi = require("hapi");
const apollo = require("graphql-server-hapi");
const hapiPort = process.env.HAPI_PORT || 8000;
function startHapi(graphqlOptions) {
    const server = new hapi.Server();
    server.connection({
        host: 'localhost',
        port: hapiPort,
    });
    server.register({
        options: {
            graphqlOptions,
            path: '/graphql',
        },
        register: apollo.graphqlHapi,
    });
    server.register({
        options: {
            graphiqlOptions: {
                endpointURL: '/graphql',
            },
            path: '/',
        },
        register: apollo.graphiqlHapi,
    });
    server.start(() => {
        console.log(`HAPI server is listen on ${hapiPort}`);
        console.log(`open browser to http://localhost:${hapiPort}`);
    });
}
exports.startHapi = startHapi;
//# sourceMappingURL=hapi.js.map