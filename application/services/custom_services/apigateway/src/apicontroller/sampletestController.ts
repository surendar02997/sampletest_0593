import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class sampletestController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/sampletest/get/search', this.GpSearch);
this.router.put('/sampletest', this.GpUpdate);
this.router.post('/sampletest', this.GpCreate);
    }

public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into sampletestController.ts: GpSearch');
        new ApiAdaptar().get(Constant.SAMPLETESTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from sampletestController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into sampletestController.ts: GpUpdate');
        new ApiAdaptar().put(Constant.SAMPLETESTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from sampletestController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into sampletestController.ts: GpCreate');
        new ApiAdaptar().post(Constant.SAMPLETESTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from sampletestController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }




}
