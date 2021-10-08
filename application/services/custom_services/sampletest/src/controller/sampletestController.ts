import { Request, Response } from 'express';
import { sampletestService } from '../service/sampletestService';
import { CustomLogger } from '../config/Logger'
let sampletest = new sampletestService();

export class sampletestController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
sampletest.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sampletestController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sampletestController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
sampletest.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sampletestController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sampletestController.ts: GpUpdate');
    })}
public GpCreate(req: Request, res: Response) {
sampletest.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sampletestController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sampletestController.ts: GpCreate');
    })}


}