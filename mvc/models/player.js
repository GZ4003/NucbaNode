const {saveFile, getData } = require("./filesmethods");

class Player {
    constructor(name,score, team){
        this.name = name;
        this.score = score;
        this.team = team;
    }

    async save(){
        try {
            const players = await getData("players");
            players.push(this);
            await saveFile("PLAYERS", players);
            return this;
        } catch(err){
            if(err.code === "ENOENT"){
                try {
                    const players= [this];
                    await saveFile("players", players);
                    return this;
                } catch (error){
                    return null;
                }
            }
        }
    }

    static findByName(name){
        const foundPlayers = [];
        for(let i = 0; i < players.length; i++){
            if(players[i].name === name){
                foundPlayers.push(players[i]);
            }
        }
        return foundPlayers;
    }
}


module.exports = Player;