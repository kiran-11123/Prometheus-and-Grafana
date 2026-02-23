import express from 'express';

//prom-express
const app = express();

app.use(express.json());





app.get("/user" , async (req,res)=>{


    let user = {
         name : "Kiran",
        age :30
    }
     
     res.status(200).json({
        message : "First GET request",
        
    })


})



app.post("/user"  ,  async (req , res)=>{
     
     res.status(200).json({
        message : "First POST request"
    })
})






app.listen(5000 , ()=>{
     console.log("Server is running")
})