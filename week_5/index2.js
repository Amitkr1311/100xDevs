const express = require("express");
const app = express();

let requestcount = 0;
function requestcounter(req,res,next){
    requestcount = requestcount + 1;
    console.log(`Total number of requests currently ${requestcount}`);
    next();
}

function realsumfinder(req,res){
    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const result = a+b;
    res.json({
        result,a,b
    });
}

app.get("/sum",requestcounter,realsumfinder);

app.listen(3001);