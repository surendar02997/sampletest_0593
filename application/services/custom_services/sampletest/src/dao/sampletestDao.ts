import * as mongoose from 'mongoose';
import sampletestModel from '../models/sampletest';
import { CustomLogger } from '../config/Logger'


export class sampletestDao {
    private sampletest = sampletestModel;
    constructor() { }
    
    public async GpSearch(sampletestData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into sampletestDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(sampletestData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.sampletest.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from sampletestDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(sampletestData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into sampletestDao.ts: GpUpdate');

    

    
    
    
    this.sampletest.findOneAndUpdate({ _id: sampletestData._id }, sampletestData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from sampletestDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(sampletestData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into sampletestDao.ts: GpCreate');

    let temp = new sampletestModel(sampletestData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from sampletestDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}