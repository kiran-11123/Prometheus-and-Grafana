import client from 'prom-client'


const ActiveUserGauge = new client.Gauge({
     name : "active_users",
     help : "Total number of users",
     labelNames : ["method" , "route"]
})

export function activeuserFunction(req:any , res:any , next:any){
     
    ActiveUserGauge.inc({
         method : req.method,
         route : req.path
    })

    res.on("finish" , ()=>{
         ActiveUserGauge.dec({
            method : req.method,
            route :req.path
         })
    })

    next(); 
}