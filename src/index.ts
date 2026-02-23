import express from 'express';
import { requestCount  } from './monitoring/requestCount';
//prom-express
import { requestHistogramFunction } from './monitoring/requestHistogram';
import { activeuserFunction } from './monitoring/requestGauge';
import  client from 'prom-client'

const app = express();

app.use(express.json());
app.use(requestCount)
app.use(activeuserFunction);
app.use(requestHistogramFunction)





app.get("/user" , async (req,res)=>{


    let user = {
         name : "Kiran",
        age :30
    }
     
     res.status(200).json({
        message : "First GET request",
        
    })


})



app.post("/user1"  ,  async (req , res)=>{
     
     res.status(200).json({
        message : "First POST request"
    })
})



app.get("/metrics" , async(req,res)=>{
     
    const metrics = await client.register.metrics();
    res.set('Content-type' , client.register.contentType);
    res.end(metrics);
})


app.listen(3000 , ()=>{
     console.log("Server is running")
})