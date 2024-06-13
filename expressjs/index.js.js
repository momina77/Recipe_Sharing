const express = require("express");
const exp=express();
//Define a simpleendpoint
exp.get('/helo',(req,res) => {
    res.send('hello world');
});
const port=3000;
exp.listen(port,()=> {
    console.log(`server is running on http://localhost ${port}`);
});