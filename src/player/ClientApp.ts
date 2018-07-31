import {WebsocketConnection} from '../common/WebsocketConnection';
import {setInject} from '../common/InjectDectorator';
import {Server} from '../common/Server';

export class ClientApp {

    constructor() {
        const connection = new WebsocketConnection();

        setInject(Server, connection);

        console.log('connection', connection);

    }

}