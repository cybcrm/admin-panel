const gamesRouter = require("express").Router(); 
const { sendAllGames, deleteGame, addGameController } = require("../controllers/games");
const { getAllGames } = require("../middlewares/games");

gamesRouter.post("/games", getAllGames, addGameController);
gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete("/games/:id", getAllGames, deleteGame);

module.exports = gamesRouter;