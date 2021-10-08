import { Request, Response, NextFunction } from "express";
import { sampletestController } from '../controller/sampletestController';


export class Routes {
    private sampletest: sampletestController = new sampletestController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/sampletest/get/search').get(this.sampletest.GpSearch);
app.route('/sampletest').put(this.sampletest.GpUpdate);
app.route('/sampletest').post(this.sampletest.GpCreate);
     }

}