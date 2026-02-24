import { NextFunction  , Request , Response} from 'express'
import client from 'prom-client'

const PostRequestCounter = new client.Counter({
      
    name :"post_request_count",
    help : "Total Post request counts",
    labelNames : ['method' , 'route']
})


export function PostrequestCounterFunction(req  : Request , res : Response , next : NextFunction){
        
    PostRequestCounter.inc({
         method : req.method ,
         route : req.route
    })

     
}

