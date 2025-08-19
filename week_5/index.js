const express = require("express");
const app = express();

app.get("/sum", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const result = a+b;
    res.json(result);
})

app.get("/sum/:a/:b", function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const result = a+b;
    res.json({
        result,a,b
    });
})

app.get("/multiply", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const result = a*b;
    res.json(result);
})

app.get("/subtract", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const result = a-b;
    res.json(result);
})

app.get("/divide", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const result = a/b;
    res.json(result);
})

app.listen(3000);