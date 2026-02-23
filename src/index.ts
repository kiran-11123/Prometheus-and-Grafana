import express from 'express';

//prom-express
const app = express();


app.use(express.json());

function middleware(req :any,res :any,next:any){ 
     
    const startTime = Date.now();
    next();

    const endTime   = Date.now() - startTime ;

    console.log("Total Time took is " , endTime , "ms"  );

 
}

app.use(middleware);



app.get("/user" , async (req,res)=>{


    let user = {
         name : "Kiran",
        age :30
    }
     
     res.status(200).json({
        message : "First GET request",
        
    })


})



app.post("/user" ,middleware ,  async (req , res)=>{
     
    return res.status(200).json({
        message : "First POST request"
    })
})






app.listen(5000 , ()=>{
     console.log("Server is running")
})