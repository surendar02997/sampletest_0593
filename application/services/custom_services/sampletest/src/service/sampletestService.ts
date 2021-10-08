import { Request, Response } from 'express';
import {sampletestDao} from '../dao/sampletestDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let sampletest = new sampletestDao();

export class sampletestService {
    
    constructor() { }
    
    public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into sampletestService.ts: GpSearch')
     let  sampletestData = req.query;
     sampletest.GpSearch(sampletestData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from sampletestService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into sampletestService.ts: GpUpdate')
     let  sampletestData = req.body;
     sampletest.GpUpdate(sampletestData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from sampletestService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into sampletestService.ts: GpCreate')
     let  sampletestData = req.body;
     sampletest.GpCreate(sampletestData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from sampletestService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}