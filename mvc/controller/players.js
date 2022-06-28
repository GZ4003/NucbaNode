const Player = require("../models/player");

const searchByName = (req,res,next) =>{
    const name = req.params.name
    const foundPlayers = Player.findByName(name);
    res.send(foundPlayers);
};

const createPlayer = (req,res,next)=>{
    const newPlayer = new Player(req.body.name, req.body.score, req.body.team);
    newPlayer.save();
    res.send(newPlayer);
};

module.exports ={
    searchByName: searchByName,
    createPlayer: createPlayer,
}