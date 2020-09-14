import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import logger from 'morgan'
import methodOverride from 'method-override'
import { Application, Request, Response } from 'express';
import { Connector } from './connector';

export class Main {

    // express server and database connector
    private app: Application;
    private connector: Connector;

    constructor() {
        this.app = express();
        this.connector = new Connector();

        this.initServer();
    }

    private initServer(): void {
        this.app.listen(8000, () => {
            console.log('Server runs on port 8000')
        });

        // express server settings
        this.app.use(logger('dev'));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(methodOverride());
        this.app.use(cors());

        this.app.get('/test', (req: Request, res: Response) => {
            res.status(200);
            res.json("success");
        });
    }
}