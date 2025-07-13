const express = require('express');

const app = express();

app.get('/',(req:any,res:any)=>{
    res.send('hello')
})

app.listen(5000,()=>{
    console.log('server started at 5000');
})