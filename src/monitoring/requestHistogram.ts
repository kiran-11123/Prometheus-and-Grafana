
import client from 'prom-client'

const requestHistogram = new client.Histogram({
    name : "request_duration_seconds",
    help : "Duration of HTTP requests in seconds",
    labelNames : ["method" , "route" , "status_code"],
    buckets : [0.1 , 5 , 15 , 50 , 100 , 300 , 500 , 3000 , 5000 , 10000]


})


export function requestHistogramFunction(req:any , res:any , next:any) {
   

    const startTime = Date.now();
    res.on("finish" , ()=>{
         
        const endTime = Date.now();

        requestHistogram.observe({
            method : req.method,
            route : req.path,
            status_code : res.statusCode
         } , (endTime - startTime) / 1000)
        })
    

    next();


}