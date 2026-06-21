import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();


app.get("/", (req, res) => {
  console.log("Defult Get API Hit");
  res.json({ massage: "Welcom to my fist backend project" });
});

app.post("/login",(req,res) =>{
    res.json({massage : "login Sucesfull"})
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server Start on Port " , port);
    
})