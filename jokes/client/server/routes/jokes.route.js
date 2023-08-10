const Jokecontroller = require("../controllers/jokes.controller")




module.exports = (app)=> {
    app.get("/api/test", Jokecontroller.apiTest)
    app.get("/api/jokes", Jokecontroller.allJoke)
    app.get("/api/jokes/:id", Jokecontroller.oneJoke)
    app.post("/api/jokes", Jokecontroller.addJoke)
    app.patch("/api/jokes/:id", Jokecontroller.updateJoke)
    app.delete("/api/jokes/:id", Jokecontroller.deleteJoke)
}