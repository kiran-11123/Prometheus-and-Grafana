import  client from 'prom-client'

const requestCounter = new client.Counter({
    name:  "request_count",
    help:"Total request count",
    labelNames : ["method" , "route"]
     
})

export function requestCount(req :any,res:any,next:any) { 

    requestCounter.inc({

      

        method : req.method,
        route : req.path,
         
    });

    next();

        

} 