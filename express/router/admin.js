const express = require('express');

const router = express.Router();

router.use("/",(req, res,next)=>{
  console.log("pepe de usuarios");
  if(true){
    next();
  } else{
    res.send("no autorizado");
  }
})

router.get("/getuser", (req,res,next) =>{
    console.log('estoy en un middleware');
    res.send(req.method);
});

router.post("/createuser",(req, res, next)=>{
    console.log("post de user");
    res.send(req.method);
})

module.exports = router;
