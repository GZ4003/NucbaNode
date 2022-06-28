const express = require("express");

const router = express.Router();

router.get("/name", (req, res, next)=>{
    console.log("GET /client")
    res.send("get the clients");
});

router.get("/list", (req, res, next)=>{
    console.log("GET /clientes");
    res.send("agarrar todos los clientes");
});

router.post("/",(req,res,next)=>{
    console.log(req.body);
    res.send("created client")
});

router.get("/name/:name", (req,res, next)=>{
    const name = req.params.name;
    console.log(name);
    const ages = req.query.ages;
    console.log(ages);
    res.send("info user");
})

module.exports = router;