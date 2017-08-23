import SWAPIConnector from '../connectors/swapi';
export default class BaseModel {
    protected connector: SWAPIConnector;
    constructor(connector: any);
    getConnections(urls: Array<string>): any;
    getConnection(url: string): any;
}
