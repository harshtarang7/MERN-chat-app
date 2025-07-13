import { dummyData } from "./data/dummyData";
const dotenv = require('dotenv')
const express = require('express');
const app = express();
dotenv.config();

app.get('/',(req:any,res:any)=>{
    res.send('hello')
})

app.get('/get-chat',(req:any,res:any)=>{
    res.send(dummyData)
})

app.get('/get-chat/:id',(req:any,res:any)=>{
    try {
    const id:string = req.params.id
    const users = dummyData.find(chat=>chat.id === id)
    if(!users){
        res.status(404).json({
            message:'no users found with this id',
            success:false
        })
    }
    res.send(users)
    } catch (error) {
        console.log(error)
    }
   
})

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log('server started at 5000');
})