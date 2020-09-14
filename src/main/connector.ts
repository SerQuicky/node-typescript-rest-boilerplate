import { Database } from 'sqlite3'

export class Connector {

    private database: Database;

    constructor() {
        this.database = new Database('./sqlite.db', async (err) => {
            if (err) {
                console.error(err.message);
            }

            await this.createTables();
            await this.addEntries();
        })
    }

    private createTables(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            resolve();
        });
    }

    private addEntries(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            resolve();
        });
    }

    private executeRequest(request: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.database.run(request, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
}