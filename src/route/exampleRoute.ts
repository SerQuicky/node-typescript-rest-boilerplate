import { Request, Response, Application } from 'express';

export class ExampleRoutes {

    private app: Application;

    constructor(app: Application) {
        this.app = app;
        this.initRoutes();
    }

    private initRoutes(): void {
        this.app.get('/example', (req: Request, res: Response) => {
            res.status(200);
            res.json("example");
        });
    }
}