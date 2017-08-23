export default class SWAPIConnector {
    loader: any;
    private rootURL;
    constructor(rootURL: string);
    fetch(resource: string): Promise<any>;
    fetchPage(resource: string, offset?: number, limit?: number): any;
}
